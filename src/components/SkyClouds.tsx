interface CloudClusterProps {
  variant: 'cumulus-wide' | 'cumulus-tall' | 'cumulus-drift' | 'cumulus-wispy';
  className?: string;
}

function CloudShape({ variant, className = '' }: CloudClusterProps) {
  if (variant === 'cumulus-tall') {
    return (
      <svg
        viewBox="0 0 420 220"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        {/* Soft shaded underside */}
        <path
          d="M44 190c-22 0-38-14-38-34 0-17 12-31 29-34 4-24 25-42 51-42 9 0 18 2 25 7 12-33 44-57 83-57 44 0 81 30 89 71 7-3 15-4 23-4 28 0 51 20 55 47 21 3 37 18 37 37 0 21-18 37-42 37H44Z"
          fill="#E4F4FC"
          fillOpacity="0.92"
        />
        {/* Crisp pure-white sunlit cumulus body */}
        <path
          d="M52 182c-20 0-35-13-35-31 0-16 11-29 27-32 4-23 24-40 49-40 8 0 16 2 23 6 12-32 43-54 80-54 42 0 77 29 85 68 7-2 14-4 22-4 27 0 49 19 52 44 20 3 35 17 35 34 0 19-16 33-38 33H52Z"
          fill="#FFFFFF"
        />
        {/* Bright sunlit crown highlight */}
        <path
          d="M126 94c14-27 42-45 75-45 37 0 68 23 78 56-16-9-38-12-62-8-22 3-44 8-69 4-8-2-15-4-22-7Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (variant === 'cumulus-drift') {
    return (
      <svg
        viewBox="0 0 460 190"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M36 164c-19 0-32-12-32-28 0-15 11-27 27-29 5-22 25-37 49-37 11 0 21 3 29 9 13-25 40-42 71-42 32 0 60 18 72 44 10-6 22-10 35-10 31 0 57 21 63 49 19 3 33 16 33 33 0 18-16 31-37 31H36Z"
          fill="#E7F6FD"
          fillOpacity="0.9"
        />
        <path
          d="M44 157c-18 0-31-11-31-26 0-14 11-25 26-27 5-20 24-35 47-35 10 0 20 3 28 8 12-24 38-40 68-40 31 0 57 17 69 42 9-6 21-9 33-9 30 0 54 19 60 46 18 3 31 15 31 30 0 17-15 29-35 29H44Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (variant === 'cumulus-wispy') {
    return (
      <svg
        viewBox="0 0 380 140"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M28 118c-14 0-24-9-24-21 0-11 9-20 21-22 6-16 21-27 40-27 9 0 17 2 24 7 11-18 31-30 55-30 27 0 50 15 58 37 7-3 15-5 24-5 24 0 43 15 47 36 14 2 24 12 24 24 0 13-12 22-28 22H28Z"
          fill="#FFFFFF"
          fillOpacity="0.94"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 540 220"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Flat-bottomed cumulus shadow layer */}
      <path
        d="M48 194c-24 0-42-15-42-36 0-19 14-35 34-38 5-28 29-49 60-49 12 0 24 3 34 10 15-34 50-58 92-58 46 0 85 28 99 69 11-6 24-10 38-10 37 0 68 25 75 58 22 4 38 19 38 39 0 22-19 38-44 38H48Z"
        fill="#E2F3FC"
        fillOpacity="0.92"
      />
      {/* Pure sunlit white cumulus body */}
      <path
        d="M56 186c-22 0-39-14-39-33 0-17 13-32 31-35 5-26 28-46 57-46 11 0 22 3 31 9 14-32 47-55 87-55 44 0 81 26 94 65 11-6 23-9 36-9 35 0 65 23 71 54 20 4 35 18 35 36 0 20-18 35-41 35H56Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const BACK_CLOUD_CLUSTERS: {
  variant: CloudClusterProps['variant'];
  positionClass: string;
}[] = [
  { variant: 'cumulus-wide', positionClass: 'top-[4%] left-[-4%] w-[480px] sm:w-[620px] opacity-85' },
  { variant: 'cumulus-tall', positionClass: 'top-[13%] right-[-2%] w-[400px] sm:w-[540px] opacity-88' },
  { variant: 'cumulus-drift', positionClass: 'top-[24%] left-[12%] w-[440px] sm:w-[580px] opacity-82' },
  { variant: 'cumulus-wide', positionClass: 'top-[36%] right-[4%] w-[500px] sm:w-[640px] opacity-86' },
  { variant: 'cumulus-tall', positionClass: 'top-[48%] left-[-3%] w-[420px] sm:w-[560px] opacity-85' },
  { variant: 'cumulus-drift', positionClass: 'top-[60%] right-[8%] w-[460px] sm:w-[600px] opacity-82' },
  { variant: 'cumulus-wide', positionClass: 'top-[73%] left-[6%] w-[500px] sm:w-[640px] opacity-86' },
  { variant: 'cumulus-tall', positionClass: 'top-[86%] right-[-2%] w-[430px] sm:w-[570px] opacity-85' },
];

const FRONT_CLOUD_CLUSTERS: {
  variant: CloudClusterProps['variant'];
  positionClass: string;
}[] = [
  { variant: 'cumulus-wispy', positionClass: 'top-[8%] right-[14%] w-[320px] sm:w-[420px] opacity-92' },
  { variant: 'cumulus-drift', positionClass: 'top-[19%] left-[2%] w-[380px] sm:w-[500px] opacity-90' },
  { variant: 'cumulus-wispy', positionClass: 'top-[30%] right-[16%] w-[340px] sm:w-[440px] opacity-92' },
  { variant: 'cumulus-tall', positionClass: 'top-[42%] left-[18%] w-[360px] sm:w-[470px] opacity-90' },
  { variant: 'cumulus-wispy', positionClass: 'top-[54%] left-[4%] w-[330px] sm:w-[430px] opacity-92' },
  { variant: 'cumulus-drift', positionClass: 'top-[66%] right-[10%] w-[390px] sm:w-[510px] opacity-90' },
  { variant: 'cumulus-wispy', positionClass: 'top-[79%] left-[16%] w-[340px] sm:w-[450px] opacity-92' },
  { variant: 'cumulus-drift', positionClass: 'top-[91%] left-[-4%] w-[400px] sm:w-[520px] opacity-88' },
];

export function SkyClouds() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#24a4d8]"
    >
      {/* Top sunlit painterly cloud horizon seamlessly faded into #24a4d8 sky */}
      <div className="absolute inset-x-0 top-0 h-[1200px] sm:h-[1500px] opacity-75 [mask-image:linear-gradient(to_bottom,black_0%,black_45%,transparent_100%)]">
        <div className="h-full w-[118%] bg-[url('/assets/aistudio/file_000000003de48208908714c0dd1fed66_6ed4d764.png')] bg-cover bg-top bg-no-repeat brightness-[1.06] contrast-[1.05] animate-cloud-drift will-change-transform" />
      </div>

      {/* Back cumulus cloud layer — pure white fluffy silhouettes drifting across full document */}
      <div className="absolute inset-y-0 left-0 w-[122%] animate-cloud-drift will-change-transform">
        {BACK_CLOUD_CLUSTERS.map((cloud, idx) => (
          <div key={`back-${idx}`} className={`absolute ${cloud.positionClass}`}>
            <CloudShape variant={cloud.variant} className="w-full h-auto drop-shadow-[0_12px_28px_rgba(14,104,148,0.14)]" />
          </div>
        ))}
      </div>

      {/* Front counter-drifting cumulus puffs for energetic parallax depth */}
      <div className="absolute inset-y-0 left-0 w-[122%] animate-cloud-drift-reverse will-change-transform">
        {FRONT_CLOUD_CLUSTERS.map((cloud, idx) => (
          <div key={`front-${idx}`} className={`absolute ${cloud.positionClass}`}>
            <CloudShape variant={cloud.variant} className="w-full h-auto drop-shadow-[0_10px_24px_rgba(14,104,148,0.12)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
