export default function BackgroundGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1024"
        fill="none"
      >
        <path
          d="M-277.534 1012.96C-130.854 1013.79 10.9597 982.702 125.226 922.654C239.492 862.607 326.21 773.603 458.35 703.122C590.489 632.641 768.051 580.684 930.588 590.177C1093.12 599.671 1240.63 670.615 1343.66 698.707C1446.69 726.799 1505.24 712.039 1574.38 675.113C1643.52 638.187 1723.25 579.094 1762.26 510.458C1801.27 441.822 1799.56 363.642 1777.42 292.058C1755.28 220.474 1712.72 155.486 1669.37 100.15C1626.02 44.8136 1581.89 -0.870697 1537.76 -46.5549"
          stroke="#E0E7FF"
          strokeWidth="2"
        />
        <circle cx="1300" cy="100" r="20" fill="#C7D2FE" fillOpacity="0.5" />
        <circle cx="100" cy="800" r="50" fill="#C7D2FE" fillOpacity="0.3" />
        <circle cx="1200" cy="600" r="30" fill="#C7D2FE" fillOpacity="0.4" />
      </svg>
    </div>
  )
}
