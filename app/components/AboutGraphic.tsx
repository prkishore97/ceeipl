export default function AboutGraphic({ className = "" }) {
  return (
    <svg className={`${className} w-full h-full`} viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="100" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="100" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <line x1="20" y1="80" x2="180" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <line x1="20" y1="20" x2="180" y2="20" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    </svg>
  )
}
