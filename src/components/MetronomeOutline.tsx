import { useId } from "react";

type MetronomeOutlineProps = {
  className?: string;
};

const MetronomeOutline = ({ className }: MetronomeOutlineProps) => {
  const uid = useId();
  const bodyId = `metronome-body-${uid}`;
  const sheenId = `metronome-sheen-${uid}`;

  const d = `
    M 220 40
    Q 220 0 260 0
    H 740
    Q 780 0 780 40

    L 900 1260
    Q 920 1380 820 1380
    H 180
    Q 80 1380 100 1260

    Z
  `;

  return (
    <svg
      viewBox="0 -12 1000 1412"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={bodyId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#121212" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>

        <radialGradient id={sheenId} cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path d={d} fill={`url(#${bodyId})`} />

      <path d={d} fill={`url(#${sheenId})`} />

      <path
        d={d}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={18}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MetronomeOutline;
