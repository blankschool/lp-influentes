import { useState } from "react";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

const frentes = [
  { glyph: '↗', title: 'Geração de leads qualificados', body: 'Clientes originados por autoridade chegam com intenção maior e ciclo de venda menor. O CAC é estruturalmente mais baixo — e melhora com o tempo.', active: true },
  { glyph: '◈', title: 'Atração de talento', body: 'Profissionais de alta performance escolhem onde trabalhar com base em quem está construindo o negócio. Posicionamento claro do fundador reduz o custo das melhores contratações.' },
  { glyph: '⟳', title: 'Parcerias e deal flow', body: 'Parcerias estratégicas, M&A e oportunidades relevantes circulam entre quem o mercado conhece. Posicionamento claro amplia o acesso a esse fluxo.' },
  { glyph: '∞', title: 'Ativo permanente', body: 'Diferente de mídia paga, a autoridade construída não se deprecia quando o investimento para. É um ativo que permanece independente de empresa, cargo ou ciclo econômico.' },
];

const SignalBars = ({ active }: { active: boolean }) => {
  const heights = [8, 14, 20, 26, 32];
  return (
    <div className="flex items-end gap-[3px] mb-5">
      {heights.map((h, i) => (
        <div key={i} className="w-1 rounded-[1px]" style={{ height: h, background: active ? 'rgba(240,237,230,0.55)' : 'rgba(240,237,230,0.06)' }} />
      ))}
    </div>
  );
};

const MercadoSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] relative bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
      <div className="wave-bg" />
      <Eyebrow>Por que isso importa</Eyebrow>
      <h2 className="font-serif-body font-normal leading-[1.15] text-cream mb-12" style={{ fontSize: 'clamp(26px, 3vw, 42px)', letterSpacing: '-0.5px' }}>
        O mercado não compra<br />
        do melhor. Compra de<br />
        <em className="italic" style={{ color: 'rgba(240,237,230,0.35)' }}>quem ele lembra.</em>
      </h2>
      <p className="text-[15px] font-light leading-[1.85] max-w-[520px]" style={{ color: 'rgba(240,237,230,0.42)' }}>
        Quando a presença do fundador se torna consistente, os efeitos aparecem em quatro frentes do negócio — todas com retorno acumulativo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-14" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
        {frentes.map((f, i) => {
          const isActive = hoveredIdx === i || (hoveredIdx === null && f.active);
          return (
            <div
              key={i}
              className="bg-ink relative overflow-hidden transition-colors p-[36px_32px]"
              style={{ cursor: 'default' }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity" style={{
                background: 'linear-gradient(90deg, rgba(212,200,154,0) 0%, rgba(212,200,154,0.5) 50%, rgba(212,200,154,0) 100%)',
                opacity: hoveredIdx === i ? 1 : 0
              }} />
              <SignalBars active={isActive} />
              <span className="font-mono-brand text-[18px] absolute top-7 right-7" style={{ color: 'rgba(240,237,230,0.12)' }}>{f.glyph}</span>
              <div className="text-[14px] font-medium text-cream mb-2.5">{f.title}</div>
              <p className="text-[13px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.38)' }}>{f.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 max-w-[600px]">
        <div className="pl-7 py-6" style={{ borderLeft: '2px solid rgba(240,237,230,0.08)' }}>
          <p className="font-serif-body text-[16px] italic font-normal leading-[1.7] mb-3.5" style={{ color: 'rgba(240,237,230,0.5)' }}>
            "Mídia paga mantém o custo constante. Autoridade acumulada reduz esse custo a cada ciclo. São lógicas opostas — e a maioria das empresas só opera com uma delas."
          </p>
          <div className="font-mono-brand text-[10px] tracking-[1px]" style={{ color: 'rgba(240,237,230,0.2)' }}>— Blank</div>
        </div>
      </div>
    </section>
  );
};

export default MercadoSection;
