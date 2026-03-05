const bonuses = [
  { rank: 'Top 1º', title: 'Caneta Montblanc', body: 'Um gesto simbólico para representar a sua decisão de se tornar protagonista da sua história contada.', highlight: true },
  { rank: 'Top 3', title: 'Treinamento In Company presencial', body: 'Nossos fundadores passarão um dia na sua operação treinando o seu time.', highlight: false },
  { rank: 'Top 10', title: '3 Eventos Presenciais', body: 'O programa inclui 1, mas este bônus te dá acesso aos demais eventos do primeiro ano.', highlight: false },
];

const BonusSection = () => (
  <section className="relative py-[80px] px-6 md:py-[120px] md:px-[52px] overflow-hidden" style={{ background: 'hsl(42 33% 92%)', borderBottom: '1px solid rgba(10,10,8,0.08)' }}>
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />

    <div className="relative z-10 font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(10,10,8,0.45)' }}>
      <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(10,10,8,0.25)' }} />
      Bônus de Inauguração
    </div>

    <h2 className="relative z-10 font-display font-normal leading-[0.96] mb-4" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', letterSpacing: '-2px', color: '#0C0C0A' }}>
      Bônus de<br /><em className="italic" style={{ color: 'rgba(10,10,8,0.35)' }}>Inauguração.</em>
    </h2>

    <p className="relative z-10 text-[19px] font-light leading-[1.85] max-w-[540px] mb-16" style={{ color: 'rgba(10,10,8,0.65)' }}>
      As primeiras vagas garantem benefícios exclusivos além do programa. Quanto antes você decidir, mais você leva.
    </p>

    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
      {bonuses.map((b, i) => (
        <div key={i} className="relative flex flex-col" style={{
          background: b.highlight ? '#0C0C0A' : '#161613',
          border: b.highlight ? '1px solid rgba(212,200,154,0.3)' : '1px solid rgba(240,237,230,0.06)',
          boxShadow: b.highlight ? '0 48px 96px rgba(0,0,0,0.35), 0 16px 40px rgba(0,0,0,0.22), 0 4px 12px rgba(0,0,0,0.15)' : '0 32px 64px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.12)',
          padding: 'clamp(32px, 3.5vw, 52px) clamp(28px, 3vw, 44px)',
          transform: b.highlight ? 'translateY(-8px)' : 'none',
        }}>
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: b.highlight ? 'linear-gradient(90deg, rgba(212,200,154,0.2) 0%, rgba(212,200,154,0.9) 50%, rgba(212,200,154,0.2) 100%)' : 'rgba(240,237,230,0.07)' }} />
          <div className="font-mono-brand text-[14px] tracking-[3px] uppercase mb-5" style={{ color: b.highlight ? 'rgba(212,200,154,0.75)' : 'rgba(240,237,230,0.35)' }}>{b.rank}</div>
          <div className="font-serif-body text-[26px] font-normal mb-4 leading-[1.2]" style={{ color: b.highlight ? 'hsl(42 33% 92%)' : 'rgba(240,237,230,0.85)' }}>{b.title}</div>
          <p className="text-[17px] font-light leading-[1.8]" style={{ color: 'rgba(240,237,230,0.55)' }}>{b.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BonusSection;
