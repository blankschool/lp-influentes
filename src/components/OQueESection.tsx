const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const notItems = [
  'Mentoria onde você aprende e executa sozinho',
  'Curso gravado para assistir quando sobrar tempo',
  'Agência que produz conteúdo sem transferir inteligência',
];

const OQueESection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-2" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
      <div>
        <Eyebrow>O que é o Influentes</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream mb-7" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Não é mentoria.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>Não é agência.</em>
        </h2>
        <div className="flex flex-col mb-8">
          {notItems.map((text, i) => (
            <div key={i} className="flex gap-4 items-baseline py-3.5" style={{ borderBottom: '1px solid rgba(240,237,230,0.04)' }}>
              <span className="font-mono-brand text-[16px] flex-shrink-0" style={{ color: 'rgba(240,237,230,0.60)' }}>✕</span>
              <span className="text-[17px] font-light line-through" style={{ color: 'rgba(240,237,230,0.60)', textDecorationColor: 'rgba(240,237,230,0.12)' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="font-mono-brand text-[13px] tracking-[3px] uppercase mb-5" style={{ color: 'rgba(240,237,230,0.68)' }}>O que é</div>
        <div className="font-serif-body text-[22px] font-normal leading-[1.65] mb-8" style={{ color: 'rgba(240,237,230,0.88)' }}>
          Um programa executivo de marca pessoal para donos. Em 120 dias, a Blank desenha o seu posicionamento, capacita o seu time e instala uma operação dentro do seu negócio que gera receita através das suas redes sociais.
        </div>
      </div>
    </div>
  </section>
);

export default OQueESection;
