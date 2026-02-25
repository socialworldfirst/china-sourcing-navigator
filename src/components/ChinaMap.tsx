/* Clean, minimal China map for hero section — static, no interactivity */
export default function ChinaMap() {
  const cities = [
    { name: "Guangzhou", x: 535, y: 435, primary: true },
    { name: "Shenzhen", x: 548, y: 448, primary: true },
    { name: "Dongguan", x: 545, y: 440, primary: false },
    { name: "Foshan", x: 525, y: 432, primary: false },
    { name: "Zhongshan", x: 530, y: 445, primary: false },
    { name: "Yiwu", x: 585, y: 355, primary: true },
    { name: "Ningbo", x: 595, y: 345, primary: true },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="180 100 500 420" className="w-full h-auto">
        {/* Simplified but accurate China outline */}
        <path
          d="M305 140 L325 130 L345 125 L370 118 L395 115 L420 112 L445 110 L465 112 L485 115 L505 112 L520 115 L535 120 L548 128 L560 138 L568 150 L572 165 L575 180 L580 195 L585 205 L590 218 L595 230 L600 245 L605 258 L610 270 L612 285 L610 298 L605 310 L598 322 L590 335 L585 348 L580 360 L575 372 L570 385 L565 398 L558 408 L548 420 L538 430 L525 438 L512 445 L498 450 L485 455 L470 458 L455 455 L440 450 L425 442 L412 435 L398 425 L385 418 L372 410 L360 405 L348 400 L335 398 L322 395 L310 398 L298 402 L288 408 L278 412 L268 408 L260 400 L255 388 L250 375 L248 360 L250 345 L255 330 L260 315 L265 300 L268 285 L272 270 L275 255 L278 242 L282 230 L288 218 L295 208 L302 198 L308 188 L312 178 L315 168 L312 158 L308 148 L305 140 Z"
          fill="#F7F8FA"
          stroke="#DDE0E4"
          strokeWidth="1.5"
        />

        {/* Guangdong region subtle highlight */}
        <ellipse
          cx="535"
          cy="440"
          rx="30"
          ry="18"
          fill="rgba(255, 0, 81, 0.06)"
          stroke="none"
        />

        {/* City markers */}
        {cities.map((city) => (
          <g key={city.name}>
            <circle
              cx={city.x}
              cy={city.y}
              r={city.primary ? 4 : 2.5}
              fill="#FF0051"
              opacity={city.primary ? 1 : 0.6}
            />
            {city.primary && (
              <text
                x={city.name === "Ningbo" ? city.x + 8 : city.x}
                y={city.name === "Ningbo" ? city.y + 4 : city.y - 10}
                textAnchor={city.name === "Ningbo" ? "start" : "middle"}
                fontSize="9"
                fontWeight="500"
                fill="#484F56"
                fontFamily="Poppins, sans-serif"
              >
                {city.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
