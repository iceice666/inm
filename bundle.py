#!/usr/bin/env python3
"""Rebundle ui_kits/showcase-v2/ into the root index.html.

Reads showcase-v2/index.html, inlines CSS (replacing font/asset URLs with
UUIDs), assigns UUIDs to all external script/icon assets, gzip-compresses
each asset, base64-encodes them into a manifest, and writes the new
self-contained index.html using the existing loader wrapper from the current
index.html.
"""

import re, json, gzip, base64, uuid, os, sys
from pathlib import Path

ROOT = Path(__file__).parent
SHOWCASE = ROOT / "ui_kits" / "showcase-v2"
OUTPUT = ROOT / "index.html"

# ---- Load the existing loader script (from current index.html) ----
with open(OUTPUT, encoding="utf-8") as f:
    existing = f.read()

loader_m = re.search(r"(<script>.*?</script>)", existing, re.DOTALL)
if not loader_m:
    print("ERROR: could not find loader script in index.html", file=sys.stderr)
    sys.exit(1)
loader_script = loader_m.group(1)

# ---- Read the thumbnail SVG (reuse from existing) ----
thumb_m = re.search(r'(<div id="__bundler_thumbnail">.*?</div>)', existing, re.DOTALL)
thumb_html = thumb_m.group(1) if thumb_m else '<div id="__bundler_thumbnail"></div>'

# ---- Process showcase HTML ----
with open(SHOWCASE / "index.html", encoding="utf-8") as f:
    html = f.read()

manifest = {}

def add_asset(path: Path, mime: str) -> str:
    uid = str(uuid.uuid4())
    data = path.read_bytes()
    compressed = gzip.compress(data, compresslevel=9)
    manifest[uid] = {
        "mime": mime,
        "compressed": True,
        "data": base64.b64encode(compressed).decode(),
    }
    return uid

MIME = {
    ".svg":  "image/svg+xml",
    ".css":  "text/css",
    ".js":   "application/javascript",
    ".jsx":  "application/javascript",
    ".ttf":  "font/ttf",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".png":  "image/png",
    ".jpg":  "image/jpeg",
    ".jpeg": "image/jpeg",
}

def resolve(href: str, base: Path) -> Path | None:
    """Resolve a relative href against a base directory."""
    if href.startswith("http://") or href.startswith("https://") or href.startswith("data:"):
        return None
    p = (base / href).resolve()
    return p if p.exists() else None

# 1. Inline CSS: replace <link rel="stylesheet" href="..."> with <style>...</style>
#    and within the CSS text replace url() font refs with UUID blob placeholders.
def process_css(css_text: str, css_dir: Path) -> str:
    def replace_url(m):
        raw = m.group(1).strip("'\"")
        p = resolve(raw, css_dir)
        if p is None:
            return m.group(0)
        ext = p.suffix.lower()
        mime = MIME.get(ext, "application/octet-stream")
        uid = add_asset(p, mime)
        return f"url({uid})"
    return re.sub(r"url\(([^)]+)\)", replace_url, css_text)

def inline_stylesheets(html_text: str) -> str:
    def replace_link(m):
        href = m.group(1)
        p = resolve(href, SHOWCASE)
        if p is None:
            return m.group(0)
        css_text = p.read_text(encoding="utf-8")
        css_text = process_css(css_text, p.parent)
        return f"<style>\n{css_text}\n</style>"
    return re.sub(
        r'<link\s+rel="stylesheet"\s+href="([^"]+)"[^>]*/?>',
        replace_link,
        html_text,
        flags=re.IGNORECASE,
    )

# 2. Replace <link rel="icon" href="..."> with UUID
def replace_icon(html_text: str) -> str:
    def sub(m):
        href = m.group(1)
        p = resolve(href, SHOWCASE)
        if p is None:
            return m.group(0)
        uid = add_asset(p, MIME.get(p.suffix.lower(), "image/svg+xml"))
        return f'<link rel="icon" href="{uid}" />'
    return re.sub(r'<link\s+rel="icon"\s+href="([^"]+)"[^>]*/?>',
                  sub, html_text, flags=re.IGNORECASE)

# 3. Replace <script src="..."> (non-text/babel) with UUID src
def replace_plain_scripts(html_text: str) -> str:
    def sub(m):
        attrs_before, src, attrs_after = m.group(1), m.group(2), m.group(3)
        p = resolve(src, SHOWCASE)
        if p is None:
            return m.group(0)
        uid = add_asset(p, "text/javascript")
        return f"<script{attrs_before}src=\"{uid}\"{attrs_after}></script>"
    # Match <script ...src="..."...></script> where type is NOT text/babel
    return re.sub(
        r'<script(?![^>]*type="text/babel")([^>]*)src="([^"]+)"([^>]*)></script>',
        sub,
        html_text,
        flags=re.IGNORECASE,
    )

# 4. Replace text/babel <script type="text/babel" src="..."> src with UUID
def replace_babel_scripts(html_text: str) -> str:
    def sub(m):
        pre, src, post = m.group(1), m.group(2), m.group(3)
        p = resolve(src, SHOWCASE)
        if p is None:
            return m.group(0)
        uid = add_asset(p, "application/javascript")
        return f'<script{pre}src="{uid}"{post}></script>'
    return re.sub(
        r'<script((?=[^>]*type="text/babel")[^>]*)src="([^"]+)"([^>]*)></script>',
        sub,
        html_text,
        flags=re.IGNORECASE,
    )

# Apply transformations in order
template = html
template = inline_stylesheets(template)
template = replace_icon(template)
template = replace_plain_scripts(template)
template = replace_babel_scripts(template)

# Encode template as JSON string for embedding.
# Escape </script> so the literal string cannot terminate the enclosing
# <script> tag; the browser JSON.parse handles \/ identically to /.
def safe_json(obj):
    return json.dumps(obj, ensure_ascii=False).replace("</", "<\\/")

template_json = safe_json(template)
manifest_json = safe_json(manifest)

# ---- Build the output HTML ----
LOADER_HEAD = """\
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>inm — color system</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #faf9f5; display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
    #__bundler_loading { position: fixed; bottom: 20px; right: 20px; font: 13px/1.4 -apple-system, BlinkMacSystemFont, sans-serif; color: #666; background: #fff; padding: 8px 14px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.12); z-index: 10000; }
    #__bundler_thumbnail { position: fixed; inset: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #faf9f5; z-index: 9999; }
    #__bundler_thumbnail svg { width: 100%; height: 100%; object-fit: contain; }
    #__bundler_placeholder { color: #999; font-size: 14px; }
  </style>
  <noscript>
    <style>#__bundler_loading { display: none; }</style>
    <div style="position:fixed;bottom:12px;left:12px;font:13px/1.4 -apple-system,BlinkMacSystemFont,sans-serif;color:#999;background:rgba(255,255,255,0.9);padding:6px 12px;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,0.08);z-index:10000;">
      This page requires JavaScript to display.
    </div>
  </noscript>
</head>
<body>
"""

output_parts = [
    LOADER_HEAD,
    thumb_html, "\n",
    '  <div id="__bundler_loading">Unpacking...</div>\n\n',
    "  ", loader_script, "\n\n",
    f'  <script type="__bundler/manifest">{manifest_json}</script>\n',
    f'  <script type="__bundler/template">{template_json}</script>\n',
    "</body>\n</html>\n",
]

out = "".join(output_parts)
OUTPUT.write_text(out, encoding="utf-8")
print(f"Done: {OUTPUT} ({len(out):,} bytes, {len(manifest)} assets)")
