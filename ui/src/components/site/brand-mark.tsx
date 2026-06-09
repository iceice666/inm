interface BrandMarkProps {
  size?: number
  className?: string
}

export function BrandMark({ size = 36, className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#5D555E" strokeOpacity="0.18" strokeWidth="1.5">
        <ellipse cx="18.5" cy="19" rx="11.5" ry="10.5" transform="rotate(-12 18.5 19)" fill="#979F9B" />
        <ellipse cx="45.5" cy="19" rx="11.5" ry="10.5" transform="rotate(12 45.5 19)" fill="#C9BFB6" />
        <ellipse cx="31.5" cy="46" rx="13" ry="12" fill="#3E343F" />
        <circle cx="32" cy="31" r="14" fill="#A1736B" />
      </g>
    </svg>
  )
}
