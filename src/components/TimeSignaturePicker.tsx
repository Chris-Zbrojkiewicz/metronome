import React from "react";

interface TimeSignaturePickerProps {
  beats: number;
  beatUnit: number;
  onTimeSignatureChange: (beats: number, beatUnit: number) => void;
}

const commonTimeSignatures = [
  { beats: 4, beatUnit: 4 },
  { beats: 3, beatUnit: 4 },
  { beats: 2, beatUnit: 4 },
  { beats: 6, beatUnit: 8 },
];

const TimeSignaturePicker: React.FC<TimeSignaturePickerProps> = ({
  beatUnit,
  beats,
  onTimeSignatureChange,
}) => {
  return (
    <div className="flex items-center justify-center gap-5 md:gap-10 md:m-4">
      {commonTimeSignatures.map((ts) => (
        <div
          key={`${ts.beats}/${ts.beatUnit}`}
          onClick={() => onTimeSignatureChange(ts.beats, ts.beatUnit)}
          className={
            ` button-base flex py-2 flex-col justify-center items-center w-8 h-8 md:w-10 md:h-10 text-zinc-400 text-sm md:text-lg font-medium rounded-lg cursor-pointer ` +
            `${beats === ts.beats && beatUnit === ts.beatUnit ? "button-pressed" : ""}`
          }
        >
          <span>{ts.beats} </span>
          <span className="-mt-2 md:-mt-3">{ts.beatUnit}</span>
        </div>
      ))}
    </div>
  );
};

export default TimeSignaturePicker;
