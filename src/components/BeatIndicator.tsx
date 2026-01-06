import React from "react";

interface BeatIndicatorProps {
  isActive: boolean;
  isFirstBeat: boolean;
}

const BeatIndicator: React.FC<BeatIndicatorProps> = ({
  isActive,
  isFirstBeat,
}) => {
  const base =
    "rounded-full border-2 w-5 h-3 md:w-8 md:h-4";

  const inactive = "border border-zinc-400/70 bg-zinc-800/40 shadow-[0_2px_4px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]";

  const activeNormal =
    "border-green-400 bg-green-400";

  const activeFirst =
    "border-green-400 bg-green-400 shadow-[0_0_6px_rgba(93,242,140,0.9),0_0_14px_rgba(93,242,140,0.7)]";

  return (
    <div
      className={[
        base,
        !isActive && inactive,
        isActive && !isFirstBeat && activeNormal,
        isActive && isFirstBeat && activeFirst,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
};


export default BeatIndicator;
