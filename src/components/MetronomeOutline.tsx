import { useId } from "react";

type LogoProps = {
  className?: string;
};

const MetronomeOutline = ({ className }: LogoProps) => {
  const uid = useId();
  const fillId = `metronomeFill-${uid}`;
  const sheenId = `metronomeSheen-${uid}`;
  const hatchId = `metronomeHatch-${uid}`;

  const d =
    "m 3801,14144 c -128,-34 -257,-149 -308,-276 -26,-62 -889,-3354 -1549,-5908 C 1841,7561 1753,7228 1748,7220 1728,7183 10,579 4,515 -3,435 15,348 56,262 92,188 190,92 275,50 l 70,-35 4545,-5 c 2500,-3 4565,-2 4590,2 124,21 261,131 324,259 50,104 63,179 49,277 -7,42 -122,498 -256,1012 -134,514 -249,960 -255,990 -7,30 -37,143 -67,250 -30,107 -689,2625 -1465,5595 -776,2970 -1420,5425 -1432,5455 -40,103 -117,191 -216,247 -117,66 -59,63 -1237,62 -903,0 -1078,-3 -1124,-15 z";

  return (
    <svg
      viewBox="0 0 986 1417"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
**Original:**

      <defs>
        {/* Stronger base gradient so it reads as “3D” on dark UIs */}
        <linearGradient
          id={fillId}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#2b2b2b" />
          <stop offset="55%" stopColor="#101010" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>

        {/* Sheen overlay: use stopOpacity (reliable) */}
        <linearGradient
          id={sheenId}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="22%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.00" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.16" />
        </linearGradient>

        {/* Diagonal texture pattern (subtle stripes), clipped by the shape */}
        <pattern
          id={hatchId}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-20)"
        >
          <rect width="24" height="24" fill="transparent" />
          <rect x="0" y="0" width="10" height="24" fill="#ffffff" opacity="0.03" />
        </pattern>
      </defs>

      <g transform="translate(0,1417) scale(0.1,-0.1)">
        {/* Base */}
        <path d={d} fill={`url(#${fillId})`} />

        {/* Texture */}
        <path d={d} fill={`url(#${hatchId})`} />

        {/* Sheen */}
        <path d={d} fill={`url(#${sheenId})`} />
      </g>
    </svg>
  );
};

export default MetronomeOutline;


