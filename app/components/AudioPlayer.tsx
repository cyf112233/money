'use client';

import { useState } from 'react';

export default function AudioPlayer() {
  const [isStarted, setIsStarted] = useState(false);

  if (!isStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <button 
          onClick={() => setIsStarted(true)}
          className="gradient-button px-8 py-4 text-2xl font-bold text-white rounded-full"
        >
          点我有惊喜
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 gap-6 sm:gap-8">
      <audio 
        src="/music/background.mp3" 
        autoPlay 
        loop 
        className="hidden"
      />
      <p className="text-2xl sm:text-3xl font-bold text-center px-4">建议捐我98买三角符文😋😋😋</p>
      <a 
        href="https://qr.alipay.com/fkx14805mxzdmsca3w0jf0e" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer hover:opacity-90 transition-opacity"
      >
        <img 
          src="/支付宝.jpg" 
          alt="支付宝" 
          className="w-48 sm:w-64 h-auto"
        />
      </a>
      <div className="w-full max-w-[646px] px-4">
        <iframe 
          src="https://store.steampowered.com/widget/1671210/" 
          frameBorder="0" 
          width="100%" 
          height="190"
          className="w-full"
        />
      </div>
    </div>
  );
} 