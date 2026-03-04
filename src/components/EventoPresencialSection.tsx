const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[10px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.2)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.12)' }} />
    {children}
  </div>
);

const cards = [
  { title: 'Conselheiros presencialmente', body: 'Rony, Renata ou Erich presente. Mentoria presencial com quem construiu presença que gera negócio — e pode ser consultado ao vivo.' },
  { title: 'Networking com outros membros', body: 'Espaço para construir ou fortalecer relações com os colegas de cohort — e com ex-alunos de turmas anteriores.' },
  { title: 'Mentoria em grupo com a Blank', body: 'Análise coletiva, ajuste de rota e benchmarking entre ex-alunos com dados reais de operação autônoma.' },
  { title: 'Produção de conteúdo ao vivo', body: 'Parte do dia é para gravar. Com feedback imediato do grupo e dos conselheiros — um ciclo que reativa e melhora o que foi construído no programa.' },
];

const EventoPresencialSection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-2" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-14">
      <div>
        <Eyebrow>Pós-programa</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Evento presencial.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>3× por ano.</em>
        </h2>
      </div>
      <p className="text-[15px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.42)' }}>
        O encontro presencial acontece 1 a 2 meses após o encerramento — quando você já operou de forma autônoma. A Blank realiza 3 encontros por ano e cada ex-aluno tem direito a 1 acesso por ano.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1px', background: 'rgba(240,237,230,0.08)', border: '1px solid rgba(240,237,230,0.08)' }}>
      {cards.map((c, i) => (
        <div key={i} className="bg-ink p-[44px_40px] transition-colors hover:bg-ink-2">
          <div className="text-[15px] font-medium mb-2.5" style={{ color: 'rgba(240,237,230,0.65)' }}>{c.title}</div>
          <p className="text-[13px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.32)' }}>{c.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EventoPresencialSection;
