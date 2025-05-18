export default function ContactGraphic({ className = "" }) {
  return (
    <svg className={`${className} w-full h-full`} viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M20,50 Q60,20 100,50 T180,50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="20" cy="50" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="100" cy="50" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="180" cy="50" r="5" fill="currentColor" opacity="0.4" />
      <rect x="40" y="70" width="120" height="20" rx="10" fill="currentColor" opacity="0.2" />
    </svg>
  )
}
