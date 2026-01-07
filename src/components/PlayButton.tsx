import React from "react";
import { FaPlay, FaPause } from "react-icons/fa6";

interface PlayButtonProps {
  isPlaying: boolean;
  onStart: () => Promise<void>;
  onStop: () => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  onStart,
  onStop,
}) => {
  const handlePlayPauseClick = async () => {
    if (isPlaying) {
      onStop();
    } else {
      await onStart();
    }
  };

  return (
    <div
      onClick={handlePlayPauseClick}
      className="m-1 md:m-5 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 transition-opacity rounded-full cursor-pointer hover:opacity-80 button-base shadow-[0_14px_18px_rgba(0,0,0,0.8),inset_0_0_0_2px_#505050,inset_0_0_0_8px_#151515]"
    >
      {isPlaying ? (
        <FaPause
          aria-label="Pause the metronome"
          className="text-zinc-400 md:text-4xl"
        />
      ) : (
        <FaPlay
          aria-label="Start the metronome"
          className="text-zinc-400 md:text-4xl"
        />
      )}
    </div>
  );
};

export default PlayButton;


