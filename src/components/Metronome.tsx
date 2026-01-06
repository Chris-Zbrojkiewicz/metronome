import React, { useState } from 'react';
import TimeSignaturePicker from './TimeSignaturePicker';
import MetronomeOutline from './MetronomeOutline';
import PlayButton from './PlayButton';
import BeatBox from './BeatBox';
import Display from './Display';
interface MetronomeProps {
  bpm: number;
  beats: number;
  beatUnit: number;
  currentBeat: number | null;
  isPlaying: boolean;
  onStart: () => Promise<void>;
  onStop: () => void;
  onBpmChange: (bpm: number) => void;
  onTimeSignatureChange: (beats: number, beatUnit: number) => void;
}

const Metronome: React.FC<MetronomeProps> = ({
  bpm,
  beats,
  beatUnit,
  currentBeat,
  isPlaying,
  onStart,
  onStop,
  onBpmChange,
  onTimeSignatureChange,
}) => {
  const [timerKey, setTimerKey] = useState(0);

  const handleStart = async () => {
    if (!isPlaying) {
      setTimerKey(k => k + 1);
    }
    await onStart();
  };

  const handleBpmChange = (value: number | ((prev: number) => number)) => {
    const newBpm = typeof value === 'function' ? value(bpm) : value;
    onBpmChange(newBpm);
  };

  return (
    <div className="relative w-full max-w-[600px] aspect-[1000/1400] metronome-wrap">
      <MetronomeOutline className="absolute inset-0 block w-full h-full pointer-events-none select-none" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-center flex-1 px-6">
          <Display bpm={bpm} handleBpmChange={handleBpmChange} isPlaying={isPlaying} timerKey={timerKey} currentBeat={currentBeat} beats={beats} />
        </div>
        <div className="flex flex-col items-center flex-1 px-6 pb-6 justify-evenly">
          <PlayButton
            isPlaying={isPlaying}
            onStart={handleStart}
            onStop={onStop}
          />
          <div className="flex flex-col items-center gap-2">
            <BeatBox beats={beats} currentBeat={currentBeat} />
            <TimeSignaturePicker
              beats={beats}
              beatUnit={beatUnit}
              onTimeSignatureChange={onTimeSignatureChange}
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Metronome;
