import { getFormUrl } from "@/lib/utm";

const specs = [
  ['Diagnóstico e plano estratégico', '✓'], ['Assessment do time + trilha', '✓'], ['8 roteiros base pela Blank', '✓'],
  ['Ciclo quinzenal de mentorias', '✓'], ['Account manager dedicado', '120 dias'], ['Sessões com conselheiros', 'Todo mês'],
  ['3 revisões 1:1', 'Meses 2–4'], ['Call de internalização', '3h · Mês 4'], ['Base operacional completa', 'Permanente'],
];

const CloseSection = () => (
  <section className="py-[72px] px-6 md:py-[120px] md:px-[52px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center bg-ink-2 relative overflow-hidden">
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30" viewBox="0 0 800 400" preserveAspectRatio="xMaxYMid slice">
      <circle cx="760" cy="200" r="60" fill="none" stroke="#F0EDE6" strokeWidth=".4" opacity=".12" />
      <circle cx="760" cy="200" r="120" fill="none" stroke="#F0EDE6" strokeWidth=".3" opacity=".08" />
      <circle cx="760" cy="200" r="200" fill="none" stroke="#F0EDE6" strokeWidth=".25" opacity=".05" />
      <circle cx="760" cy="200" r="320" fill="none" stroke="#F0EDE6" strokeWidth=".2" opacity=".04" />
    </svg>
    <div className="relative z-[1]">
      <div className="inline-block font-mono-brand text-[13px] font-medium tracking-[2px] uppercase mb-6 py-2 px-4" style={{ color: 'rgba(212,200,154,0.9)', background: 'rgba(212,200,154,0.06)', border: '1px solid rgba(212,200,154,0.12)' }}>
        Inauguração Especial · Vagas limitadas
      </div>
      <h2 className="font-display font-normal leading-[0.93] text-cream mb-4" style={{ fontSize: 'clamp(44px, 6vw, 82px)', letterSpacing: '-3px' }}>
        Influentes.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>Founders Program.</em>
      </h2>
      <p className="text-[19px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.65)', maxWidth: '460px' }}>
        A sua marca pessoal já deveria estar gerando receita. Esse é o programa que instala essa operação de vez.
      </p>
    </div>
    <div className="relative z-[1]" style={{ border: '1px solid rgba(240,237,230,0.08)', borderTop: '2px solid hsl(42 33% 92%)' }}>
      <div className="p-9">
        <div className="font-mono-brand text-[13px] tracking-[3px] uppercase mb-5" style={{ color: 'rgba(240,237,230,0.55)' }}>Resumo</div>
        <div className="flex flex-col">
          {specs.map(([k, v], i) => (
            <div key={i} className="flex justify-between items-baseline gap-4 py-[11px] text-[17px]" style={{ borderBottom: i < specs.length - 1 ? '1px solid rgba(240,237,230,0.04)' : 'none' }}>
              <span className="font-light" style={{ color: 'rgba(240,237,230,0.60)' }}>{k}</span>
              <span className="font-mono-brand text-[15px] font-medium" style={{ color: 'rgba(240,237,230,0.85)' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-[24px_36px]" style={{ borderTop: '1px solid rgba(240,237,230,0.08)', background: 'rgba(240,237,230,0.015)' }}>
        <a href={getFormUrl()} target="_blank" rel="noopener noreferrer" className="block w-full py-[17px] text-center font-mono-brand text-[14px] font-medium tracking-[2px] uppercase bg-cream text-ink no-underline transition-opacity hover:opacity-[0.88] mb-2.5">Enviar Aplicação</a>
        <div className="font-mono-brand text-[13px] text-center tracking-[0.5px]" style={{ color: 'rgba(240,237,230,0.12)' }}>Entrada por candidatura · Vagas limitadas</div>
      </div>
    </div>
  </section>
);

export default CloseSection;
