const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const timeline = [
  { phase: 'Meses 1–3', title: 'A Blank opera lado a lado', body: 'Cada decisão editorial é feita em conjunto — e documentada em tempo real.', highlight: false },
  { phase: 'Mês 4 · Sem 1–3', title: 'O time assume a execução', body: 'A responsabilidade migra progressivamente. A Blank acompanha, mas não conduz.', highlight: false },
  { phase: 'Mês 4 · Sem 4 — Call de 3h', title: 'Transferência completa', body: 'Sessão estruturada que transfere o método inteiro: posicionamento, critérios, métricas e protocolos. O time sai sabendo operar de forma autônoma.', highlight: true },
  { phase: 'Pós-programa', title: 'Documentação permanece na empresa', body: 'Diagnóstico, plano, roteiros e 120 dias de decisões registradas. Sem dependência externa.', highlight: false },
];

const deliverables = [
  'Lógica de posicionamento e como evoluí-la',
  'Critérios editoriais por linha de conteúdo',
  'Como criar novos roteiros com o método',
  'Métricas que importam e como interpretá-las',
  'Protocolo de decisão quando os resultados variarem',
  'Acesso a Certificação em Social Media para o time',
  'IA personalizada com seus posts',
];

const InternalizacaoSection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-2" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
      <div>
        <Eyebrow>Internalização da inteligência — o critério de sucesso do programa</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          A Blank não quer<br />ser necessária<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>para sempre.</em>
        </h2>
      </div>
      <div className="pt-0 md:pt-[52px]">
        <p className="text-[19px] font-light leading-[1.85]" style={{ color: 'rgba(240,237,230,0.92)' }}>
          A maioria das agências tem incentivo para permanecer indispensável. O Influentes inverte essa lógica: o critério de sucesso é que você não precise da Blank no mês 5.
        </p>
        <div className="mt-6">
          <div className="font-mono-brand text-[13px] tracking-[3px] uppercase mb-3" style={{ color: 'rgba(240,237,230,0.72)' }}>O que é entregue na call de 3h</div>
          {deliverables.map((d, i) => (
            <div key={i} className="flex items-baseline gap-2.5 py-2.5 text-[17px] font-light" style={{ color: 'rgba(240,237,230,0.92)', borderBottom: '1px solid rgba(240,237,230,0.04)' }}>
              <span className="font-mono-brand text-[14px] flex-shrink-0" style={{ color: 'rgba(240,237,230,0.68)' }}>→</span>
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-14" style={{ borderLeft: '1px solid rgba(240,237,230,0.08)' }}>
      {timeline.map((t, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-7 pl-9 relative" style={{ borderBottom: i < timeline.length - 1 ? '1px solid rgba(240,237,230,0.04)' : 'none' }}>
          <div className="absolute w-[9px] h-[9px] rounded-full left-[-5px] top-[34px]" style={{ background: t.highlight ? 'rgba(240,237,230,0.6)' : 'rgba(240,237,230,0.15)', border: '1px solid hsl(60 6% 7%)' }} />
          <div className="font-mono-brand text-[14px] font-medium tracking-[2px] uppercase pt-0.5" style={{ color: t.highlight ? 'rgba(240,237,230,0.7)' : 'rgba(240,237,230,0.4)' }}>{t.phase}</div>
          <div>
            <div className="text-[19px] font-medium mb-1.5" style={{ color: t.highlight ? 'hsl(42 33% 92%)' : 'rgba(240,237,230,0.82)' }}>{t.title}</div>
            <p className="text-[17px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.72)' }}>{t.body}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default InternalizacaoSection;
