import { useState } from "react";

const IconLeads = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,16 7,10 11,13 18,5" /><polyline points="13,5 18,5 18,10" /><circle cx="3" cy="16" r="1.5" fill={color} stroke="none" />
  </svg>
);
const IconTalent = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round">
    <circle cx="8" cy="7" r="3" /><path d="M2 19 C2 14.5 14 14.5 14 19" /><path d="M17 3 L17.65 5.2 L20 5.2 L18.1 6.6 L18.75 8.8 L17 7.4 L15.25 8.8 L15.9 6.6 L14 5.2 L16.35 5.2 Z" fill={color} stroke="none" />
  </svg>
);
const IconDeal = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round">
    <circle cx="5" cy="11" r="3" /><circle cx="17" cy="11" r="3" /><line x1="8" y1="11" x2="14" y2="11" /><line x1="11" y1="8" x2="14" y2="11" /><line x1="11" y1="14" x2="14" y2="11" />
  </svg>
);
const IconAsset = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 2 L20 8 L20 14 L11 20 L2 14 L2 8 Z" /><line x1="11" y1="2" x2="11" y2="20" /><line x1="2" y1="8" x2="20" y2="8" /><line x1="2" y1="14" x2="20" y2="14" />
  </svg>
);

const frentes = [
  { Icon: IconLeads, title: 'Geração de leads qualificados', body: 'Clientes que chegam por autoridade vêm com intenção maior e ciclo de venda menor. O CAC de um lead orgânico via marca pessoal é estruturalmente mais baixo, e melhora com o tempo.', active: true },
  { Icon: IconTalent, title: 'Atração de talento', body: 'Profissionais de alta performance escolhem onde trabalhar com base em quem está construindo o negócio. Posicionamento claro do fundador reduz o custo de boas contratações.' },
  { Icon: IconDeal, title: 'Parcerias e deal flow', body: 'Quem tem posicionamento claro recebe oportunidades que outros sequer ficam sabendo. Parcerias estratégicas, M&A, convites — tudo flui quando o mercado sabe quem você é.' },
  { Icon: IconAsset, title: 'Ativo permanente', body: 'Diferente de mídia paga, a autoridade construída nas redes sociais não apaga quando o orçamento acaba. Pertence a você — independente de empresa, cargo ou ciclo econômico.' },
];

const MercadoSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  return (
    <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] relative bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
      <div className="wave-bg" />
      <div className="text-center mb-12">
        <h2 className="font-serif-body font-normal leading-[1.15] text-cream inline-block" style={{ fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-0.5px' }}>
          O mercado não compra<br />do melhor. Compra de<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.60)' }}>quem lembra.</em>
        </h2>
        <p className="text-[19px] font-light leading-[1.85] mt-6 mx-auto" style={{ color: 'rgba(240,237,230,0.93)', maxWidth: '540px' }}>
          Quando a sua presença se torna consistente, os efeitos aparecem em quatro frentes do negócio:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-14" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
        {frentes.map((f, i) => {
          const isActive = hoveredIdx === i || (hoveredIdx === null && f.active);
          const iconColor = isActive ? 'rgba(240,237,230,0.7)' : 'rgba(240,237,230,0.18)';
          return (
            <div key={i} className="bg-ink relative overflow-hidden transition-colors p-[36px_32px]" style={{ cursor: 'default' }} onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}>
              <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity" style={{ background: 'linear-gradient(90deg, rgba(212,200,154,0) 0%, rgba(212,200,154,0.5) 50%, rgba(212,200,154,0) 100%)', opacity: hoveredIdx === i ? 1 : 0 }} />
              <div className="mb-5 transition-all"><f.Icon color={iconColor} /></div>
              <div className="text-[18px] font-medium text-cream mb-2.5">{f.title}</div>
              <p className="text-[17px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.92)' }}>{f.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MercadoSection;
