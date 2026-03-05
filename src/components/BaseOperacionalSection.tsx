const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-10" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const BaseOperacionalSection = () => (
  <section className="bg-ink overflow-hidden relative" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="px-6 md:px-[52px] pt-[72px] md:pt-[100px]">
      <Eyebrow>Base Operacional — Influentes</Eyebrow>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center">
      <div className="relative flex items-end justify-center md:justify-start px-6 md:pl-[52px] md:pr-0 pb-0">
        <img src="/base-operacional-mockup.png" alt="Plataforma Base Operacional — Influentes" className="w-full max-w-[680px] md:max-w-none object-contain select-none" style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6))', marginBottom: '-2px' }} draggable={false} />
      </div>
      <div className="flex flex-col justify-center px-6 md:px-[64px] py-[60px] md:py-[100px]">
        <h2 className="font-display font-normal leading-[0.93] text-cream mb-8" style={{ fontSize: 'clamp(40px, 4.5vw, 76px)', letterSpacing: '-2.5px' }}>
          Tudo que foi<br />construído,<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>dentro da empresa.</em>
        </h2>
        <p className="text-[19px] font-light leading-[1.85] mb-10" style={{ color: 'rgba(240,237,230,0.92)', maxWidth: '440px' }}>
          Cada sessão, cada decisão e cada roteiro do programa fica registrado em uma plataforma estruturada pela Blank. No encerramento, esse acervo é transferido integralmente para a empresa. O time não depende da memória de ninguém.
        </p>
        <div className="font-mono-brand text-[14px] tracking-[0.5px] leading-[1.6] italic" style={{ color: 'rgba(240,237,230,0.60)' }}>
          Acesso permanente — sem prazo de expiração.
        </div>
      </div>
    </div>
  </section>
);

export default BaseOperacionalSection;
