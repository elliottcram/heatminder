export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center" style={{ backgroundColor: "#228B22" }}>
      <div className="flex flex-col items-center gap-4">

        {/* Fan + chart combo logo */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Fan blades */}
          <g transform="translate(40,40)">
            <ellipse cx="0" cy="-14" rx="6" ry="13" fill="white" opacity="0.9" transform="rotate(0)" />
            <ellipse cx="0" cy="-14" rx="6" ry="13" fill="white" opacity="0.9" transform="rotate(90)" />
            <ellipse cx="0" cy="-14" rx="6" ry="13" fill="white" opacity="0.9" transform="rotate(180)" />
            <ellipse cx="0" cy="-14" rx="6" ry="13" fill="white" opacity="0.9" transform="rotate(270)" />
            {/* Centre hub */}
            <circle cx="0" cy="0" r="5" fill="white" />
          </g>
          {/* Mini bar chart in bottom-right corner */}
          <rect x="50" y="62" width="5" height="12" rx="1" fill="white" opacity="0.85" />
          <rect x="57" y="56" width="5" height="18" rx="1" fill="white" opacity="0.85" />
          <rect x="64" y="50" width="5" height="24" rx="1" fill="white" opacity="0.85" />
          <line x1="48" y1="74" x2="71" y2="74" stroke="white" strokeWidth="1.5" opacity="0.7" />
        </svg>

        <h1 className="text-6xl font-bold tracking-tight text-white">Heatminder</h1>
        <p className="text-xl text-white/80">Optimising every heat pump</p>

        {/* Small performance graph */}
        <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline
            points="10,48 40,38 70,42 100,28 130,22 160,14 190,8 210,5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.9"
          />
          {/* Shaded area under line */}
          <polygon
            points="10,48 40,38 70,42 100,28 130,22 160,14 190,8 210,5 210,55 10,55"
            fill="white"
            opacity="0.1"
          />
          {/* Axis */}
          <line x1="10" y1="55" x2="210" y2="55" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="10" y1="5" x2="10" y2="55" stroke="white" strokeWidth="1" opacity="0.4" />
          {/* Dots on line */}
          {[[10,48],[70,42],[130,22],[190,8]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="white" opacity="0.9" />
          ))}
        </svg>

      </div>
    </div>
  );
}
