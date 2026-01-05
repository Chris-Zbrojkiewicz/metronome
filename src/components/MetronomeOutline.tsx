import { useId } from "react";

type LogoProps = {
  className?: string;
};

const MetronomeOutline = ({ className }: LogoProps) => {
  const uid = useId();
  const clipId = `metronomeClip-${uid}`;
  const baseId = `metronomeBase-${uid}`;
  const topSheenId = `metronomeTopSheen-${uid}`;

  const d =
    "m 3801,14144 c -128,-34 -257,-149 -308,-276 -26,-62 -889,-3354 -1549,-5908 C 1841,7561 1753,7228 1748,7220 1728,7183 10,579 4,515 -3,435 15,348 56,262 92,188 190,92 275,50 l 70,-35 4545,-5 c 2500,-3 4565,-2 4590,2 124,21 261,131 324,259 50,104 63,179 49,277 -7,42 -122,498 -256,1012 -134,514 -249,960 -255,990 -7,30 -37,143 -67,250 -30,107 -689,2625 -1465,5595 -776,2970 -1420,5425 -1432,5455 -40,103 -117,191 -216,247 -117,66 -59,63 -1237,62 -903,0 -1078,-3 -1124,-15 z";

  const pathTransform = "translate(0,1417) scale(0.1,-0.1)";

  return (
    <svg
      viewBox="0 0 986 1417"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
          <path d={d} transform={pathTransform} />
        </clipPath>

        <linearGradient id={baseId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#222222" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>

        <radialGradient id={topSheenId} cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        <rect x="0" y="0" width="986" height="1417" fill={`url(#${baseId})`} />
        <rect x="0" y="0" width="986" height="150" fill={`url(#${topSheenId})`} />
      </g>

      <g transform={pathTransform}>
        <path
          d={d}
          fill="none"
          stroke="rgba(51,51,51)"
          strokeWidth={18}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default MetronomeOutline;
