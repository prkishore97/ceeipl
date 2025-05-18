export default function PowerLineGraphic({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,100 Q50,50 100,100 T190,100" fill="none" stroke="#3B82F6" strokeWidth="4" />
      <circle cx="10" cy="100" r="5" fill="#3B82F6" />
      <circle cx="100" cy="100" r="5" fill="#3B82F6" />
      <circle cx="190" cy="100" r="5" fill="#3B82F6" />
    </svg>
  )
}
