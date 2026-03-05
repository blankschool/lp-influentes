const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const conselheiros = [
  { initial: 'R', name: 'Rony Meisler', role: 'Fundador, Reserva · Rebels Ventures · Investidor Blank', bio: 'Fundou a Reserva e constrói posicionamento pessoal e conteúdo desde 2005, utilizando-o como vetor de capital e negócios.\n\nHoje, investe em empresas de hiper crescimento usando suas mídias para os deals.' },
  { initial: 'R', name: 'Renata Vichi', role: 'Ex-CEO, Kopenhagen e Brasil Cacau · Exit Nestlé', bio: 'Ex-CEO Kopenhagen e Brasil Cacau. Quando a Nestlé adquiriu o grupo, a autoridade que ela construiu permaneceu.\n\nReferência de posicionamento que sobrevive ao exit.' },
  { initial: 'E', name: 'Erich Shibata', role: 'Diretor de Branding, CIMED', bio: 'Responsável pelo branding da CIMED e pela gestão estratégica das redes sociais dos presidentes João Adibe e Karla Marques.\n\nReferência em posicionar marcas na attention economy.' },
];

const ConselheirosSection = () => (
  <section id="conselheiros" className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-14">
      <div>
        <Eyebrow>Conselheiros</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Um conselheiro<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>ao vivo todo mês.</em>
        </h2>
      </div>
      <p className="text-[19px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.92)' }}>
        O formato é de conversa aberta — os empresários fazem perguntas diretas sobre como cada conselheiro construiu presença que gera negócio. Rony, Renata e Erich se alternam mensalmente.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {conselheiros.map((c, i) => (
        <div key={i} className="bg-ink p-[40px_32px] transition-colors hover:bg-ink-2">
          <div className="font-display text-[64px] font-normal leading-none mb-[18px]" style={{ color: 'rgba(240,237,230,0.05)' }}>{c.initial}</div>
          <div className="font-serif-body text-[24px] font-normal text-cream mb-1">{c.name}</div>
          <div className="font-mono-brand text-[14px] leading-[1.5] tracking-[0.3px] mb-[18px]" style={{ color: 'rgba(240,237,230,0.78)' }}>{c.role}</div>
          <p className="text-[17px] font-light leading-[1.8] whitespace-pre-line" style={{ color: 'rgba(240,237,230,0.90)' }}>{c.bio}</p>
          <div className="mt-[18px] pt-3.5 font-mono-brand text-[13px] tracking-[0.5px]" style={{ borderTop: '1px solid rgba(240,237,230,0.08)', color: 'rgba(240,237,230,0.65)' }}>
            Rotação mensal · Ao vivo
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ConselheirosSection;
