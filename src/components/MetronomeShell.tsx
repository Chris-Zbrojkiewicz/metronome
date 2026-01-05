import React from "react";

const d =
    "m 3801,14144 c -128,-34 -257,-149 -308,-276 -26,-62 -889,-3354 -1549,-5908 C 1841,7561 1753,7228 1748,7220 1728,7183 10,579 4,515 -3,435 15,348 56,262 92,188 190,92 275,50 l 70,-35 4545,-5 c 2500,-3 4565,-2 4590,2 124,21 261,131 324,259 50,104 63,179 49,277 -7,42 -122,498 -256,1012 -134,514 -249,960 -255,990 -7,30 -37,143 -67,250 -30,107 -689,2625 -1465,5595 -776,2970 -1420,5425 -1432,5455 -40,103 -117,191 -216,247 -117,66 -59,63 -1237,62 -903,0 -1078,-3 -1124,-15 z";

const MetronomeShell = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    const clipId = React.useId();
    const gradId = React.useId();

    return (
        <div className={className}>
            <svg viewBox="0 0 986 1417" className="block w-full h-auto" aria-hidden="true">
                <defs>
                    <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0f0f0f" />
                        <stop offset="45%" stopColor="#060606" />
                        <stop offset="100%" stopColor="#020202" />
                    </linearGradient>

                    <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
                        <path d={d} transform="translate(0,1417) scale(0.1,-0.1)" />
                    </clipPath>
                </defs>

                <g clipPath={`url(#${clipId})`}>
                    <rect x="0" y="0" width="986" height="1417" fill={`url(#${gradId})`} />

                    <rect
                        x="20"
                        y="18"
                        width="946"
                        height="60"
                        rx="28"
                        fill="url(#topSheen)"
                        opacity="0.9"
                    />
                </g>

                <path
                    d={d}
                    transform="translate(0,1417) scale(0.1,-0.1)"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="14"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />

                <defs>
                    <linearGradient id="topSheen" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.14" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {children ? (
                    <foreignObject x="0" y="0" width="986" height="1417" clipPath={`url(#${clipId})`}>
                        <div className="w-full h-full">{children}</div>
                    </foreignObject>
                ) : null}
            </svg>
        </div>
    );
}

export default MetronomeShell;