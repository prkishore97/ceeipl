export default function ProjectsGraphic({ className = "" }) {
  return (
    <svg className={`${className} w-full h-full`} viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20,80 L40,40 L60,60 L80,20 L100,50 L120,30 L140,70 L160,50 L180,80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.3"
      />
      <circle cx="40" cy="40" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="80" cy="20" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="120" cy="30" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="160" cy="50" r="5" fill="currentColor" opacity="0.4" />
      <rect x="10" y="85" width="180" height="10" fill="currentColor" opacity="0.2" />
    </svg>
  )
}
