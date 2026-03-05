import { useEffect, useRef, useState } from "react";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const nivels = [
  { tag: 'Nível 01 — Iniciante', title: 'Sem método de conteúdo', body: 'Sabe comunicar o produto mas não tem framework editorial nem critério de formato. A Blank entrega o plano completo e conduz capacitação mais estruturada no mês 1.', width: '33%', opacity: 0.25 },
  { tag: 'Nível 02 — Em desenvolvimento', title: 'Publica sem consistência estratégica', body: 'Já opera redes sociais mas sem posicionamento claro do fundador como eixo. O foco é calibrar o que existe — não recomeçar do zero.', width: '66%', opacity: 0.4 },
  { tag: 'Nível 03 — Competente', title: 'Executa bem, falta estratégia escalável', body: 'Produz com qualidade técnica. O gargalo está no posicionamento do fundador. Capacitação foca em transformar autoridade em pauta editorial.', width: '100%', opacity: 0.6 },
];

const AssessmentSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-3" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-[52px]">
        <div>
          <Eyebrow>Como funciona — Assessment do time</Eyebrow>
          <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
            Antes de treinar,<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>a Blank diagnostica.</em>
          </h2>
        </div>
        <div className="pt-0 md:pt-[52px]">
          <p className="text-[19px] font-light leading-[1.85]" style={{ color: 'rgba(240,237,230,0.92)' }}>
            A maioria dos programas ensina o mesmo método para todo mundo. O Influentes começa entendendo o ponto de partida do seu time — e calibra o treinamento de acordo.
          </p>
          <div className="mt-6 p-[20px_24px]" style={{ border: '1px solid rgba(240,237,230,0.08)', borderTop: '2px solid rgba(240,237,230,0.35)' }}>
            <div className="font-mono-brand text-[13px] tracking-[3px] uppercase mb-2" style={{ color: 'rgba(240,237,230,0.72)' }}>Resultado do Assessment</div>
            <p className="text-[17px] font-light leading-[1.7]" style={{ color: 'rgba(240,237,230,0.92)' }}>
              O time recebe uma trilha personalizada: o que desenvolver primeiro, quais competências priorizar e qual ritmo de evolução é realista para os 120 dias do programa.
            </p>
          </div>
        </div>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
        {nivels.map((n, i) => (
          <div key={i} className="bg-ink p-[32px_28px] relative transition-colors hover:bg-ink-2">
            <div className="h-[2px] mb-5 overflow-hidden" style={{ background: 'rgba(240,237,230,0.08)' }}>
              <div className="h-full transition-all duration-600 ease-out" style={{ width: visible ? n.width : '0%', background: `rgba(240,237,230,${n.opacity})` }} />
            </div>
            <div className="font-mono-brand text-[13px] tracking-[2.5px] uppercase mb-3" style={{ color: 'rgba(240,237,230,0.68)' }}>{n.tag}</div>
            <div className="text-[20px] font-medium mb-2.5" style={{ color: 'rgba(240,237,230,0.9)' }}>{n.title}</div>
            <p className="text-[17px] font-light leading-[1.7]" style={{ color: 'rgba(240,237,230,0.90)' }}>{n.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssessmentSection;
