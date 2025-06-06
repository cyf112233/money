import AudioPlayer from './components/AudioPlayer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 gap-6 sm:gap-8">
      <AudioPlayer />
    </div>
  );
}
