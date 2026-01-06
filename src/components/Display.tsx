import BpmPicker from './BpmPicker';
import Timer from './Timer';
import Metrum from './Metrum';

interface DisplayProps {
    bpm: number;
    beats: number;
    currentBeat: number | null;
    isPlaying: boolean;
    handleBpmChange: (bpm: number | ((prev: number) => number)) => void;
    timerKey: number;
}


const Display: React.FC<DisplayProps> = ({ bpm, handleBpmChange, isPlaying, timerKey, currentBeat, beats }) => {
    return (
        <div className='mt-5 md:mt-10 md:h-120 h-85 w-50 md:w-70 display'>
            <BpmPicker bpm={bpm} setBpm={handleBpmChange} />
            <Metrum currentBeat={currentBeat} beats={beats} />
            <Timer isPlaying={isPlaying} key={timerKey} />
        </div>
    )
}

export default Display
