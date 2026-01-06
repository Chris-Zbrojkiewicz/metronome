import Metronome from './components/Metronome';
import { useMetronome } from './hooks/useMetronome';
import { ThemeToggle } from './components/ThemeToggle';
import Footer from './components/Footer';

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
    <div className="flex flex-col min-h-screen">
      <ThemeToggle isCollapsed={true} />
      <main className="flex items-center justify-center flex-1 p-4">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
