import { useEffect, useRef } from "react";

const HeroSection = () => {
  const w1Ref = useRef<SVGPathElement>(null);
  const w2Ref = useRef<SVGPathElement>(null);
  const w3Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    let t = 0;
    let raf: number;
    function buildPath(phase: number, ampScale: number, freq: number, points: number) {
      const W = 1440, cy = 450;
      let d = `M 0 ${cy}`;
      for (let i = 0; i <= points; i++) {
        const x = (i / points) * W;
        const growthFactor = Math.pow(x / W, 0.7);
        const amp = 120 * growthFactor * ampScale;
        const y = cy + Math.sin((x / W) * freq * Math.PI * 2 + phase) * amp
          + Math.sin((x / W) * freq * 1.3 * Math.PI * 2 + phase * 0.7) * amp * 0.3;
        d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
      }
      return d;
    }
    function tick() {
      t += 0.008;
      w1Ref.current?.setAttribute('d', buildPath(t, 1.0, 2.5, 200));
      w2Ref.current?.setAttribute('d', buildPath(t * 0.7 + 1.2, 0.7, 3.2, 150));
      w3Ref.current?.setAttribute('d', buildPath(t * 1.3 + 2.4, 0.5, 1.8, 100));
      raf = requestAnimationFrame(tick);
    }
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-end" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
      {/* Waveform SVG */}
      <div className="absolute inset-0 z-0 flex items-center">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0">
          <defs>
            <linearGradient id="wfade" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#0C0C0A" />
              <stop offset="15%" stopColor="#0C0C0A" stopOpacity="0" />
              <stop offset="75%" stopColor="#0C0C0A" stopOpacity="0" />
              <stop offset="100%" stopColor="#0C0C0A" />
            </linearGradient>
            <linearGradient id="wfade2" x1="0%" y1="0" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0C0C0A" />
              <stop offset="20%" stopColor="#0C0C0A" stopOpacity="0" />
              <stop offset="80%" stopColor="#0C0C0A" stopOpacity="0" />
              <stop offset="100%" stopColor="#0C0C0A" />
            </linearGradient>
          </defs>
          <g opacity="0.04">
            {[180, 270, 360, 450, 540, 630, 720].map(y => (
              <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#F0EDE6" strokeWidth={y === 450 ? "0.8" : "0.5"} />
            ))}
          </g>
          <g opacity="0.025">
            {[180, 360, 540, 720, 900, 1080, 1260].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="900" stroke="#F0EDE6" strokeWidth="0.5" />
            ))}
          </g>
          <path ref={w1Ref} d="" fill="none" stroke="#F0EDE6" strokeWidth="1.5" opacity="0.18" />
          <path ref={w2Ref} d="" fill="none" stroke="#F0EDE6" strokeWidth="0.8" opacity="0.08" />
          <path ref={w3Ref} d="" fill="none" stroke="#D4C89A" strokeWidth="0.6" opacity="0.06" />
          <rect x="0" y="0" width="1440" height="900" fill="url(#wfade)" />
          <rect x="0" y="0" width="1440" height="900" fill="url(#wfade2)" />
          <circle cx="200" cy="450" r="3" fill="#F0EDE6" opacity="0.5">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="relative z-[3] px-6 pb-[60px] md:px-[52px] md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 items-end">
        <div>
          <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase mb-7 flex items-center gap-3.5" style={{ color: 'rgba(240,237,230,0.25)' }}>
            <div className="w-7 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.15)' }} />
            Programa Executivo · Influentes
          </div>
          <h1 className="font-display text-cream font-normal leading-[0.93] tracking-[-3px]" style={{ fontSize: 'clamp(60px, 8.5vw, 122px)' }}>
            Marca pessoal<br />
            <em className="italic" style={{ color: 'rgba(240,237,230,0.28)' }}>como canal</em><br />
            de aquisição.
          </h1>
        </div>
        <div className="md:pl-16 md:border-l border-t md:border-t-0 pt-9 md:pt-0 flex flex-col justify-end gap-8" style={{ borderColor: 'rgba(240,237,230,0.08)' }}>
          <p className="text-[15px] font-light leading-[1.85] max-w-[360px]" style={{ color: 'rgba(240,237,230,0.4)' }}>
            Em 120 dias, a Blank constrói o seu posicionamento, treina o seu time e instala a operação. No encerramento, a capacidade está dentro da empresa — não na agência.
          </p>
          <div className="flex flex-col gap-3.5">
            <a href="#investimento" className="inline-block font-mono-brand text-[11px] font-medium tracking-[2px] uppercase bg-cream text-ink py-4 px-8 no-underline text-center transition-opacity hover:opacity-85">Candidatura</a>
            <a href="#estrutura" className="font-mono-brand text-[11px] tracking-[0.5px] no-underline flex items-center gap-2 transition-colors hover:text-cream" style={{ color: 'rgba(240,237,230,0.25)' }}>Como funciona →</a>
          </div>
        </div>
      </div>

      {/* Signal indicator */}
      <div className="absolute bottom-7 right-6 md:right-[52px] z-[4] flex items-center gap-3">
        <div className="flex items-end gap-[3px]">
          {[6, 10, 14, 18, 22].map((h, i) => (
            <div key={i} className="w-[3px] rounded-[1px]" style={{ height: h, background: i < 4 ? 'rgba(240,237,230,0.5)' : 'rgba(240,237,230,0.12)' }} />
          ))}
        </div>
        <span className="font-mono-brand text-[9px] tracking-[2px] uppercase" style={{ color: 'rgba(240,237,230,0.18)' }}>Sinal</span>
      </div>
    </section>
  );
};

export default HeroSection;
