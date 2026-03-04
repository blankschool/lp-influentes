const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

const stats = [
  { num: '35M+', dim: false, label: 'seguidores sob gestão', desc: 'Maior operação de gestão de marca pessoal executiva do Brasil.' },
  { num: '1 em 4', dim: true, label: 'brasileiros alcançados / mês', desc: 'Alcance orgânico mensal — sem investimento em mídia paga.' },
  { num: '2 mil', dim: true, label: 'certificados pela Blank School', desc: 'Profissionais formados nos programas de educação da Blank.' },
];

const portfolio = [
  { name: 'Tallis Gomes', co: 'G4 Educação' },
  { name: 'Renata Vichi', co: 'Kopenhagen · Brasil Cacau' },
  { name: 'Sandra Chayo', co: 'HOPE' },
  { name: 'Cris Arcangeli', co: '' },
  { name: 'Rony Meisler', co: 'Reserva · Rebels Ventures' },
  { name: 'Tony Bernardini', co: 'Trajeto · Edini' },
];

const QuemSomosSection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <Eyebrow>Quem somos</Eyebrow>
    <h2 className="font-display font-normal leading-[0.96] text-cream mb-12" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>A Blank.</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 mb-14" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {stats.map((s, i) => (
        <div key={i} className="bg-ink p-[40px_36px_32px] relative overflow-hidden" style={{ borderTop: i === 0 ? '2px solid rgba(240,237,230,0.45)' : undefined }}>
          <div className="font-display font-normal leading-none mb-2.5" style={{ fontSize: 'clamp(44px, 5vw, 68px)', letterSpacing: '-2px', color: s.dim ? 'rgba(240,237,230,0.25)' : undefined }}>{s.num}</div>
          <div className="font-mono-brand text-[10px] tracking-[1.5px] uppercase" style={{ color: 'hsl(45 4% 34%)' }}>{s.label}</div>
          <div className="text-[12px] font-light leading-[1.65] mt-3.5 pt-3.5" style={{ color: 'rgba(240,237,230,0.25)', borderTop: '1px solid rgba(240,237,230,0.04)' }}>{s.desc}</div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)', borderTop: 'none' }}>
      <div className="bg-ink p-[40px_36px]">
        <div className="font-mono-brand text-[9px] tracking-[3px] uppercase mb-4" style={{ color: 'hsl(45 4% 34%)' }}>Origem</div>
        <p className="font-serif-body text-[15px] font-normal leading-[1.75]" style={{ color: 'rgba(240,237,230,0.55)' }}>
          Nascemos dentro do G4 Educação. Levamos a marca institucional a mais de 1 milhão de seguidores — e ela passou a gerar mais receita do que Tallis Gomes, Fritzores e Bruno Nardone juntos. A marca da empresa superou os canais pessoais já consolidados. Foi aí que entendemos o que estávamos construindo.
        </p>
      </div>
      <div className="bg-ink p-[40px_36px]">
        <div className="font-mono-brand text-[9px] tracking-[3px] uppercase mb-5" style={{ color: 'hsl(45 4% 34%)' }}>Portfólio</div>
        <div className="grid grid-cols-2 gap-0">
          {portfolio.map((p, i) => (
            <div key={i} className="py-2.5" style={{ borderBottom: i < portfolio.length - 2 ? '1px solid rgba(240,237,230,0.04)' : 'none' }}>
              <div className="text-[13px] font-normal" style={{ color: 'rgba(240,237,230,0.5)' }}>{p.name}</div>
              {p.co && <div className="font-mono-brand text-[9px] mt-0.5" style={{ color: 'rgba(240,237,230,0.2)' }}>{p.co}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default QuemSomosSection;
