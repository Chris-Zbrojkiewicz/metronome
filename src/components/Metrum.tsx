import React from "react";
import { GiGClef } from "react-icons/gi";
interface MetrumProps {
  currentBeat: number | null;
  beats: number;
}

const Metrum: React.FC<MetrumProps> = ({ currentBeat, beats }) => {
  return (
    <div className="flex items-center justify-center gap-2 m-3 text-zinc-400 w-[110px] h-[30px]">
      <div className="text-xs uppercase md:text-sm">BEAT</div>
      <div className="flex items-center text-sm glow md:text-lg w-[65px] h-[30px]">
        <div className="flex flex-col justify-center w-[15px] h-[30px]">{currentBeat}</div>
        <div className="flex flex-col justify-center w-[10px] h-[30px]">/</div>
        <div className="flex flex-col justify-center w-[15px] h-[30px]">{beats}</div>
        <GiGClef aria-hidden="true" className="size-6 md:size-8 glow" />
      </div>

    </div>
  );
};

export default Metrum;
