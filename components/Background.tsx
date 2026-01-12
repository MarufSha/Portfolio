"use client";

import Waves from "./Waves";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Waves
          lineColor="rgba(0, 180, 230, 0.28)"
          backgroundColor="rgba(13, 13, 31, 0.92)"
          waveSpeedX={0.032}
          waveSpeedY={0.032}
          waveAmpX={42}
          waveAmpY={29}
          friction={0.94}
          tension={0.014}
          maxCursorMove={90}
          xGap={16}
          yGap={42}
        />
      </div>

      {children}
    </div>
  );
}
