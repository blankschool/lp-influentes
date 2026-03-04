const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

const cards = [
  { num: '01', title: 'Diagnóstico e posicionamento', body: 'O diagnóstico de marca completo, gaps identificados e o posicionamento construído ao longo do programa — documentado e acessível.' },
  { num: '02', title: 'Planejamento estratégico', body: 'Funil, linhas editoriais, plano tático e critérios de decisão. A lógica do posicionamento documentada para o time aplicar independente.' },
  { num: '03', title: 'Roteiros e modelos', body: 'Os 8 roteiros base e todos os modelos criados ao longo dos 4 meses — um acervo que o time usa para criar novos conteúdos com o método.' },
  { num: '04', title: 'Histórico de mentorias e decisões', body: 'Cada sessão registrada, cada decisão editorial documentada. O time não depende da memória de ninguém — a inteligência está no sistema.' },
];

const BaseOperacionalSection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <Eyebrow>Base Operacional</Eyebrow>
    <h2 className="font-display font-normal leading-[0.96] text-cream mb-4" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
      Tudo que foi construído,<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>dentro da empresa.</em>
    </h2>
    <p className="text-[15px] font-light leading-[1.85] max-w-[560px]" style={{ color: 'rgba(240,237,230,0.42)' }}>
      Cada sessão, cada decisão e cada roteiro do programa fica registrado em uma plataforma estruturada pela Blank. No encerramento, esse acervo é transferido integralmente para a empresa.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 mt-14" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {cards.map((c, i) => (
        <div key={i} className="bg-ink p-[44px_40px] transition-colors hover:bg-ink-2">
          <div className="font-display text-[52px] font-normal leading-none mb-4" style={{ color: 'rgba(240,237,230,0.06)' }}>{c.num}</div>
          <div className="text-[15px] font-medium mb-2.5" style={{ color: 'rgba(240,237,230,0.65)' }}>{c.title}</div>
          <p className="text-[13px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.32)' }}>{c.body}</p>
        </div>
      ))}
    </div>
    <div className="mt-6 inline-block py-3.5 px-5" style={{ border: '1px solid rgba(240,237,230,0.08)' }}>
      <span className="font-mono-brand text-[10px] tracking-[1px]" style={{ color: 'rgba(240,237,230,0.22)' }}>Acesso permanente — sem prazo de expiração</span>
    </div>
  </section>
);

export default BaseOperacionalSection;
