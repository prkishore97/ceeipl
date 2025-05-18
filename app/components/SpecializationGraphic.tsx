export default function SpecializationGraphic({ className = "" }) {
  return (
    <svg className={`${className} w-full h-full`} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M60,100 L140,100 M100,60 L100,140" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="10" fill="currentColor" />
      <circle cx="60" cy="100" r="5" fill="currentColor" />
      <circle cx="140" cy="100" r="5" fill="currentColor" />
      <circle cx="100" cy="60" r="5" fill="currentColor" />
      <circle cx="100" cy="140" r="5" fill="currentColor" />
    </svg>
  )
}
