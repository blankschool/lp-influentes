const cards = [
  { title: 'Conselheiros presencialmente', body: 'Rony, Renata ou Erich presente. Mentoria presencial com quem construiu presença que gera negócio — e pode ser consultado ao vivo.' },
  { title: 'Networking com outros membros', body: 'Espaço para construir ou fortalecer amizades duradouras com os colegas que você conheceu ao longo do seu cohort.' },
  { title: 'Mentoria em grupo', body: 'Sessões com a Blank para análise, ajuste de rota e benchmarking entre ex-alunos com dados reais de operação autônoma.' },
  { title: 'Produção de conteúdo ao vivo', body: 'Parte do dia é para gravar. Com feedback imediato do grupo e dos conselheiros — um ciclo que reativa e melhora o que foi construído no programa.' },
];

const EventoPresencialSection = () => (
  <section className="bg-ink-2 overflow-hidden" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="px-6 md:px-[52px] py-5 font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5" style={{ color: 'rgba(240,237,230,0.72)', borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
      <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
      Encontro Presencial — Benefício Pós-Programa
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: '680px' }}>
      <div className="flex flex-col" style={{ borderRight: '1px solid rgba(240,237,230,0.08)' }}>
        <div className="px-6 md:px-[52px] pt-10 pb-8">
          <h2 className="font-display font-normal leading-[0.94] text-cream" style={{ fontSize: 'clamp(44px, 5.5vw, 80px)', letterSpacing: '-2.5px' }}>Evento presencial</h2>
        </div>
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: '360px' }}>
          <img src="/evento-presencial.jpg" alt="Evento presencial Influentes" className="absolute inset-0 w-full h-full object-cover object-center" style={{ filter: 'grayscale(100%)', opacity: 0.9 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(12,12,10,0) 55%, rgba(12,12,10,0.4) 100%)' }} />
        </div>
        <div className="grid grid-cols-2" style={{ borderTop: '1px solid rgba(240,237,230,0.08)' }}>
          <div className="p-[24px_32px]" style={{ borderRight: '1px solid rgba(240,237,230,0.08)' }}>
            <div className="font-display font-normal text-cream leading-none mb-1.5" style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-2px' }}>3 ×</div>
            <div className="font-mono-brand text-[14px] tracking-[0.5px]" style={{ color: 'rgba(240,237,230,0.68)' }}>por ano (a cada 4 meses)</div>
          </div>
          <div className="p-[24px_32px]">
            <div className="font-display font-normal text-cream leading-none mb-1.5" style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-2px' }}>1 cadeira</div>
            <div className="font-mono-brand text-[14px] tracking-[0.5px]" style={{ color: 'rgba(240,237,230,0.68)' }}>por membro / ano</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2" style={{ gap: '1px', background: 'rgba(240,237,230,0.07)', alignContent: 'stretch' }}>
        {cards.map((c, i) => (
          <div key={i} className="bg-ink-2 transition-colors hover:bg-ink flex flex-col" style={{ padding: 'clamp(28px, 3vw, 48px) clamp(24px, 2.5vw, 36px)' }}>
            <div className="font-serif-body text-[21px] font-normal leading-[1.3] mb-4" style={{ color: 'rgba(240,237,230,0.9)' }}>{c.title}</div>
            <p className="text-[17px] font-light leading-[1.75]" style={{ color: 'rgba(240,237,230,0.85)' }}>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventoPresencialSection;
