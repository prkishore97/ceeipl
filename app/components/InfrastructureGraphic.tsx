export default function InfrastructureGraphic({ className = "" }) {
  return (
    <svg className={`${className} w-full h-full`} viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="60" width="30" height="40" fill="currentColor" opacity="0.3" />
      <rect x="50" y="40" width="30" height="60" fill="currentColor" opacity="0.4" />
      <rect x="90" y="20" width="30" height="80" fill="currentColor" opacity="0.5" />
      <rect x="130" y="50" width="30" height="50" fill="currentColor" opacity="0.3" />
      <rect x="170" y="30" width="30" height="70" fill="currentColor" opacity="0.4" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="2" />
      <circle cx="25" cy="20" r="10" fill="currentColor" opacity="0.2" />
      <circle cx="160" cy="15" r="8" fill="currentColor" opacity="0.2" />
    </svg>
  )
}
