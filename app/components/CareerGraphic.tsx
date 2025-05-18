export default function CareerGraphic({ className = "" }) {
  return (
    <svg className={`${className} w-full h-full`} viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="160" height="60" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="100" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <line x1="40" y1="40" x2="160" y2="40" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <line x1="40" y1="60" x2="160" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    </svg>
  )
}
