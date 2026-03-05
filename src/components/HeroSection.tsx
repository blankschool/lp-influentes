import { useEffect, useRef } from "react";

const NUM_WAVES = 5;

const HeroSection = () => {
  const waveRefs = useRef<Array<SVGCircleElement | null>>([]);

  useEffect(() => {
    const MAX_R = 1400;
    const PERIOD = 14000;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      for (let i = 0; i < NUM_WAVES; i++) {
        const el = waveRefs.current[i];
        if (!el) continue;
        const phase = ((now - start) / PERIOD + i / NUM_WAVES) % 1;
        const r = phase * MAX_R;
        const opacity = Math.sin(phase * Math.PI) * 0.07;
        const sw = (1 - phase) * 0.8 + 0.2;
        el.setAttribute('r', r.toFixed(1));
        el.setAttribute('opacity', opacity.toFixed(4));
        el.setAttribute('stroke-width', sw.toFixed(2));
      }
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0">
          <defs>
            <clipPath id="clipVP"><rect x="0" y="0" width="1440" height="900" /></clipPath>
            <radialGradient id="bgRadial" cx="6%" cy="50%" r="75%"><stop offset="0%" stopColor="#1a1a17" /><stop offset="100%" stopColor="#0C0C0A" /></radialGradient>
            <linearGradient id="wfade" x1="0%" y1="0" x2="100%" y2="0"><stop offset="0%" stopColor="#0C0C0A" /><stop offset="8%" stopColor="#0C0C0A" stopOpacity="0" /><stop offset="80%" stopColor="#0C0C0A" stopOpacity="0" /><stop offset="100%" stopColor="#0C0C0A" /></linearGradient>
            <linearGradient id="wfade2" x1="0%" y1="0" x2="0%" y2="100%"><stop offset="0%" stopColor="#0C0C0A" /><stop offset="15%" stopColor="#0C0C0A" stopOpacity="0" /><stop offset="85%" stopColor="#0C0C0A" stopOpacity="0" /><stop offset="100%" stopColor="#0C0C0A" /></linearGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="900" fill="url(#bgRadial)" />
          <g opacity="0.025">{[180, 270, 360, 450, 540, 630, 720].map(y => (<line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#B0B0A8" strokeWidth="0.4" />))}</g>
          <g opacity="0.015">{[180, 360, 540, 720, 900, 1080, 1260].map(x => (<line key={x} x1={x} y1="0" x2={x} y2="900" stroke="#B0B0A8" strokeWidth="0.4" />))}</g>
          {Array.from({ length: NUM_WAVES }, (_, i) => (<circle key={i} ref={el => { waveRefs.current[i] = el; }} cx="80" cy="450" r="0" fill="none" stroke="#A0A09A" strokeWidth="0.6" opacity="0" clipPath="url(#clipVP)" />))}
          <rect x="0" y="0" width="1440" height="900" fill="url(#wfade)" />
          <rect x="0" y="0" width="1440" height="900" fill="url(#wfade2)" />
          <circle cx="80" cy="450" r="2" fill="#888884" opacity="0.5"><animate attributeName="opacity" values="0.5;0.8;0.5" dur="4s" repeatCount="indefinite" /></circle>
        </svg>
      </div>

      <div className="relative z-[3] flex-1 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="relative self-end overflow-visible">
          <img src="/hero.png" alt="Rony Meisler, Renata Vichi e Erich Shibata — Conselheiros Influentes" className="w-full h-auto block" />
          <div className="absolute inset-y-0 right-0 w-[18%] pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(12,12,10,0) 0%, rgba(12,12,10,0.88) 100%)' }} />
          <div className="absolute inset-x-0 top-0 h-[10%] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(12,12,10,0.85) 0%, rgba(12,12,10,0) 100%)' }} />
        </div>

        <div className="flex flex-col justify-end px-6 pb-[60px] md:px-[52px] md:pb-20 pt-10 md:pt-0">
          <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase mb-7 flex items-center gap-3.5" style={{ color: 'rgba(240,237,230,0.78)' }}>
            <div className="w-7 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
            INFLUENTES | FOUNDERS PROGRAM BLANK
          </div>

          <h1 className="font-display text-cream font-normal leading-[0.93] tracking-[-3px] mb-8" style={{ fontSize: 'clamp(40px, 5.5vw, 88px)' }}>
            Você não usa<br />seu canal mais<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>lucrativo:</em><br />a sua marca pessoal
          </h1>

          <p className="text-[19px] font-light leading-[1.85] mb-8" style={{ color: 'rgba(240,237,230,0.93)', maxWidth: '440px' }}>
            Em 120 dias, a Blank desenha o seu posicionamento, capacita o seu time e instala uma operação dentro do seu negócio que gera receita através das suas redes sociais.
          </p>

          <div className="flex flex-col gap-3.5">
            <a href="#investimento" className="inline-block font-mono-brand text-[14px] font-medium tracking-[2px] uppercase bg-cream text-ink py-4 px-8 no-underline text-center transition-opacity hover:opacity-85" style={{ maxWidth: '300px' }}>Enviar Aplicação</a>
            <a href="#estrutura" className="font-mono-brand text-[14px] tracking-[0.5px] no-underline flex items-center gap-2 transition-colors hover:text-cream" style={{ color: 'rgba(240,237,230,0.72)' }}>Como funciona →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
