import bonusCaneta from '@/assets/bonus-caneta.png';
import bonusTreinamento from '@/assets/bonus-treinamento.png';
import bonusEventos from '@/assets/bonus-eventos.png';

const cards = [
  { img: bonusCaneta, alt: 'Bônus Top 1º — Caneta Montblanc' },
  { img: bonusTreinamento, alt: 'Bônus Top 3 — Treinamento In Company presencial' },
  { img: bonusEventos, alt: 'Bônus Top 10 — 3 Eventos Presenciais' },
];

const BonusSection = () => (
  <section className="relative py-[80px] px-6 md:py-[120px] md:px-[52px] overflow-hidden" style={{ background: 'hsl(42 33% 92%)', borderBottom: '1px solid rgba(10,10,8,0.08)' }}>
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />

    {/* Header row */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-14 md:mb-20">
      <div>
        <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(10,10,8,0.45)' }}>
          <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(10,10,8,0.25)' }} />
          Bônus de Inauguração
        </div>
        <h2 className="font-display font-normal leading-[0.96]" style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', letterSpacing: '-2px', color: '#0C0C0A' }}>
          Bônus de<br /><em className="italic" style={{ color: 'rgba(10,10,8,0.35)' }}>Inauguração.</em>
        </h2>
      </div>
      <div className="flex items-end">
        <p className="text-[19px] font-light leading-[1.85] max-w-[540px]" style={{ color: 'rgba(10,10,8,0.65)' }}>
          As primeiras vagas garantem benefícios exclusivos além do programa. Quanto antes você decidir, mais você leva.
        </p>
      </div>
    </div>

    {/* Image cards */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-[1600px] mx-auto">
      {cards.map((c, i) => (
        <img key={i} src={c.img} alt={c.alt} className="w-full h-auto rounded-lg" loading="lazy" />
      ))}
    </div>
  </section>
);

export default BonusSection;
