const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

const cases = [
  { num: '200M', body: 'Alcance orgânico mensal atribuído à marca pessoal do fundador. O posicionamento nas redes sociais virou o principal vetor de aquisição do G4 — superando todos os canais pessoais já consolidados.', who: 'Tallis Gomes', role: 'Fundador · G4 Educação' },
  { num: '+200 mil', body: 'De 132 mil para 325 mil seguidores em menos de 1 ano. Já no primeiro mês, mais 50 mil. O número estava estagnado por anos antes da Blank instalar o método.', who: 'Sandra Chayo', role: 'Sócia Diretora · HOPE' },
  { num: 'Top of mind', body: 'De 60 mil seguidores para +286 mil em menos de um ano. Mais importante: o nome se tornou o mais reconhecido no setor de transporte — posicionamento que não se apaga.', who: 'Tony Bernardini', role: 'Fundador Trajeto · CEO Edini Transportes' },
];

const CasesSection = () => (
  <section id="cases" className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-14">
      <div>
        <Eyebrow>Resultados</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          O que<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>aconteceu.</em>
        </h2>
      </div>
      <p className="text-[15px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.42)' }}>
        A Blank gere 35 milhões de seguidores dos principais empresários do Brasil. Os casos abaixo mostram o que acontece quando posicionamento consistente encontra um negócio com substância — e alguém disposto a executar.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {cases.map((c, i) => (
        <div key={i} className="bg-ink p-[40px_32px] relative overflow-hidden transition-colors hover:bg-ink-2 group">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent transition-colors group-hover:bg-signal/40" />
          <div className="font-display font-normal text-cream leading-none mb-4" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', letterSpacing: '-1.5px' }}>{c.num}</div>
          <p className="text-[13px] font-light leading-[1.8] mb-7" style={{ color: 'rgba(240,237,230,0.38)' }}>{c.body}</p>
          <div className="h-px mb-3.5" style={{ background: 'rgba(240,237,230,0.08)' }} />
          <div className="font-serif-body text-[14px] text-cream">{c.who}</div>
          <div className="font-mono-brand text-[10px] mt-[3px] tracking-[0.3px]" style={{ color: 'rgba(240,237,230,0.22)' }}>{c.role}</div>
        </div>
      ))}
    </div>
  </section>
);

export default CasesSection;
