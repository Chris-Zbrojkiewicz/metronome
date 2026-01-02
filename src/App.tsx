import Metronome from './components/Metronome';
import { useMetronome } from './hooks/useMetronome';
import { ThemeToggle } from '@/components/theme-toggle';

function App() {
  const {
    bpm,
    setBpm,
    beats,
    beatUnit,
    currentBeat,
    setTimeSignature,
    isPlaying,
    start,
    stop,
  } = useMetronome();

  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <ThemeToggle isCollapsed={true} />
        <Metronome
          bpm={bpm}
          beats={beats}
          beatUnit={beatUnit}
          currentBeat={currentBeat}
          isPlaying={isPlaying}
          onStart={start}
          onStop={stop}
          onBpmChange={setBpm}
          onTimeSignatureChange={setTimeSignature}
        />
      <footer className="w-full py-2 text-xs text-center sm:text-sm text-muted-foreground sm:py-4">
        © 2025 <a href="https://chris-z.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Chris Zbrojkiewicz</a>
      </footer>
      </div>
  );
}

export default App;
