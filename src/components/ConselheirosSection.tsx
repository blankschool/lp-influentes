const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

const conselheiros = [
  { initial: 'R', name: 'Rony Meisler', role: 'Fundador, Reserva · Rebels Ventures · Investidor Blank', bio: 'Fundou a Reserva e constrói posicionamento pessoal e conteúdo desde 2005, utilizando-o como vetor de capital e negócios. Hoje investe em empresas de hipercrescimento usando suas mídias para os deals. Entrou como cliente, avaliou o método por dentro e tornou-se investidor da Blank.' },
  { initial: 'R', name: 'Renata Vichi', role: 'Ex-CEO, Kopenhagen e Brasil Cacau · Exit Nestlé', bio: 'Dirigiu duas das marcas mais reconhecidas do varejo brasileiro. Quando a Nestlé adquiriu o grupo, a autoridade que ela construiu permaneceu. Referência de posicionamento executivo que sobrevive ao exit — o ativo pertence ao fundador, não ao cargo.' },
  { initial: 'E', name: 'Erich Shibata', role: 'Diretor de Branding, CIMED', bio: 'Responsável pelo branding da CIMED e pela gestão estratégica das redes sociais de João Adibe e Karla Marques — dois dos casos mais estudados de presença executiva no Brasil. Visão de dentro de como uma operação desse porte é construída e mantida.' },
];

const ConselheirosSection = () => (
  <section id="conselheiros" className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-14">
      <div>
        <Eyebrow>Conselheiros</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Um conselheiro<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>ao vivo todo mês.</em>
        </h2>
      </div>
      <p className="text-[15px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.42)' }}>
        O formato é de conversa aberta — os empresários fazem perguntas diretas sobre como cada conselheiro construiu presença que gera negócio. Rony, Renata e Erich se alternam mensalmente. Em 4 meses, você tem acesso a dois dos três ao vivo.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {conselheiros.map((c, i) => (
        <div key={i} className="bg-ink p-[40px_32px] transition-colors hover:bg-ink-2">
          <div className="font-display text-[64px] font-normal leading-none mb-[18px]" style={{ color: 'rgba(240,237,230,0.05)' }}>{c.initial}</div>
          <div className="font-serif-body text-[20px] font-normal text-cream mb-1">{c.name}</div>
          <div className="font-mono-brand text-[10px] leading-[1.5] tracking-[0.3px] mb-[18px]" style={{ color: 'rgba(240,237,230,0.28)' }}>{c.role}</div>
          <p className="text-[12.5px] font-light leading-[1.8]" style={{ color: 'rgba(240,237,230,0.38)' }}>{c.bio}</p>
          <div className="mt-[18px] pt-3.5 font-mono-brand text-[9px] tracking-[0.5px]" style={{ borderTop: '1px solid rgba(240,237,230,0.08)', color: 'rgba(240,237,230,0.15)' }}>
            Rotação mensal · Ao vivo com o cohort
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ConselheirosSection;
