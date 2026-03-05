import { getFormUrl } from "@/lib/utm";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const specs = [
  ['Faturamento', 'R$ 10M+ / ano'],
  ['Perfil', 'Fundador, sócio ou CEO'],
  ['Time mínimo', '1 pessoa de marketing'],
  ['Setores', 'Curadoria por complementaridade'],
  ['Duração', '120 dias'],
  ['Processo', 'Seleção exclusiva'],
];

const ParaQuemSection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <div>
        <Eyebrow>Para quem é o programa</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream mb-6" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Para quem tem algo<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>de valor para dizer.</em>
        </h2>
        <p className="text-[19px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.92)' }}>
          O cohort é composto por empresários e sócios-fundadores com operações estabelecidas. A curadoria do cohort é parte do valor: empresas de setores complementares, com substância para construir estratégias que se somam.
        </p>
      </div>
      <div>
        <div className="font-mono-brand text-[13px] tracking-[3px] uppercase mb-5" style={{ color: 'rgba(240,237,230,0.68)' }}>Perfil</div>
        <div className="flex flex-col" style={{ border: '1px solid rgba(240,237,230,0.08)' }}>
          {specs.map(([k, v], i) => (
            <div key={i} className="flex justify-between items-baseline gap-4 py-[15px] px-5 text-[17px]" style={{ borderBottom: i < specs.length - 1 ? '1px solid rgba(240,237,230,0.08)' : 'none' }}>
              <span className="font-light" style={{ color: 'rgba(240,237,230,0.78)' }}>{k}</span>
              <span className="font-medium text-cream text-right font-mono-brand text-[15px]">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <a href={getFormUrl()} target="_blank" rel="noopener noreferrer" className="font-mono-brand text-[14px] font-medium tracking-[2px] uppercase bg-cream text-ink py-4 px-8 no-underline transition-opacity hover:opacity-85">Enviar Aplicação</a>
    </div>
  </section>
);

export default ParaQuemSection;
