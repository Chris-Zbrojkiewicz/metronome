import React, { useEffect, useState, useRef } from "react";
import { IoHourglassOutline } from "react-icons/io5";

interface TimerProps {
  isPlaying: boolean;
}

const formatTime = (seconds: number) => {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");
  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
};

const Timer: React.FC<TimerProps> = ({ isPlaying }) => {
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="flex items-center font-mono text-zinc-400 md:text-xl lcd-font max-w-3xs md:m-3 w-[85px] h-[30px]">
      <span className="inline-flex items-center">
        <IoHourglassOutline
          aria-hidden="true"
          className="w-3 h-3 mr-1 md:mr-2 md:w-5 md:h-5"
        />
      </span>
      <span className="align-middle glow">
        {formatTime(elapsed)}
      </span>
    </div>
  );
};

export default Timer;
