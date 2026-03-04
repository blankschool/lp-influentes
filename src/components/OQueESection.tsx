const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

const specs = [
  ['Duração', '120 dias'],
  ['Vagas por turma', '30 empresas'],
  ['Faturamento mínimo', 'R$ 10M / ano'],
  ['Perfil', 'Fundador, sócio ou CEO'],
  ['Time mínimo', '1 pessoa de marketing'],
  ['Entrada', 'Por candidatura'],
  ['Investimento', 'R$ 100.000'],
  ['Conselheiros', 'Rony · Renata · Erich'],
];

const notItems = [
  'Mentoria onde o empresário aprende e executa sozinho',
  'Curso gravado para assistir quando sobrar tempo',
  'Agência que produz conteúdo sem transferir inteligência',
];

const OQueESection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-2" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <div>
        <Eyebrow>O que é o Influentes</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream mb-7" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Não é mentoria.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>Não é agência.</em>
        </h2>
        <p className="text-[15px] font-light leading-[1.85] mb-8" style={{ color: 'rgba(240,237,230,0.42)' }}>
          O problema não é de esforço — é de infraestrutura. Posicionamento que não existe, time que não tem método, operação que depende da agência.
        </p>
        <div className="flex flex-col mb-8">
          {notItems.map((text, i) => (
            <div key={i} className="flex gap-4 items-baseline py-3.5" style={{ borderBottom: '1px solid rgba(240,237,230,0.04)' }}>
              <span className="font-mono-brand text-[12px] flex-shrink-0" style={{ color: 'rgba(240,237,230,0.12)' }}>✕</span>
              <span className="text-[13px] font-light line-through" style={{ color: 'rgba(240,237,230,0.2)', textDecorationColor: 'rgba(240,237,230,0.08)' }}>{text}</span>
            </div>
          ))}
        </div>
        <div className="p-[28px_24px]" style={{ border: '1px solid rgba(240,237,230,0.1)', borderTop: '2px solid rgba(240,237,230,0.45)' }}>
          <div className="font-mono-brand text-[9px] font-medium tracking-[3px] uppercase mb-3" style={{ color: 'rgba(240,237,230,0.25)' }}>O que é</div>
          <div className="font-serif-body text-[16px] font-normal leading-[1.65]" style={{ color: 'rgba(240,237,230,0.72)' }}>
            Um programa executivo que constrói o posicionamento, treina o time e instala a operação. Ao fim dos 120 dias, a empresa executa de forma autônoma — sem depender da Blank para continuar.
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col" style={{ border: '1px solid rgba(240,237,230,0.08)' }}>
          {specs.map(([k, v], i) => (
            <div key={i} className="flex justify-between items-baseline gap-4 py-[15px] px-5 text-[13px]" style={{ borderBottom: i < specs.length - 1 ? '1px solid rgba(240,237,230,0.08)' : 'none' }}>
              <span className="font-light" style={{ color: 'rgba(240,237,230,0.28)' }}>{k}</span>
              <span className="font-medium text-cream text-right font-mono-brand text-[12px]">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OQueESection;
