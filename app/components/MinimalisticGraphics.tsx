export default function MinimalisticGraphics({ className = "" }) {
  return (
    <svg className={`${className} w-full h-full`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="10" fill="currentColor" opacity="0.2" />
      <circle cx="180" cy="20" r="15" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.4" />
      <circle cx="40" cy="180" r="12" fill="currentColor" opacity="0.2" />
      <circle cx="160" cy="160" r="18" fill="currentColor" opacity="0.3" />
      <line x1="20" y1="20" x2="180" y2="180" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      <line x1="180" y1="20" x2="20" y2="180" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    </svg>
  )
}
