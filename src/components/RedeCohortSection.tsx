const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(240,237,230,0.72)' }}>
    <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(240,237,230,0.3)' }} />
    {children}
  </div>
);

const rows = [
  ['Audiência por membro', 'Executivos e decisores qualificados'],
  ['Parcerias de conteúdo', 'Acesso cruzado entre bases distintas'],
  ['Custo de exposição', 'Zero — troca de valor entre pares'],
  ['Duração do ativo de rede', 'Permanente — continua pós-programa'],
];

const RedeCohortSection = () => (
  <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink-3" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end mb-12">
      <div>
        <Eyebrow>A rede do cohort</Eyebrow>
        <h2 className="font-display font-normal leading-[0.96] text-cream" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px' }}>
          Nenhum creator<br />cresceu sozinho.<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>Todos usaram</em><br /><em className="italic" style={{ color: 'rgba(240,237,230,0.40)' }}>uma rede de collabs.</em>
        </h2>
      </div>
      <p className="text-[19px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(240,237,230,0.92)' }}>
        Cada membro traz sua própria audiência de executivos e compradores qualificados. Quando dois membros fazem uma parceria de conteúdo, as duas bases se sobrepõem — e ambos chegam a decisores que dificilmente alcançariam sozinhos via tráfego pago.
      </p>
    </div>
    <div className="flex flex-col mt-12" style={{ border: '1px solid rgba(240,237,230,0.08)' }}>
      {rows.map(([k, v], i) => (
        <div key={i} className="grid grid-cols-2" style={{ borderBottom: i < rows.length - 1 ? '1px solid rgba(240,237,230,0.08)' : 'none' }}>
          <div className="py-[18px] px-6 text-[17px] font-light" style={{ color: 'rgba(240,237,230,0.85)', borderRight: '1px solid rgba(240,237,230,0.08)' }}>{k}</div>
          <div className="py-[18px] px-6 text-[17px] font-medium" style={{ color: 'rgba(240,237,230,0.9)' }}>{v}</div>
        </div>
      ))}
    </div>
  </section>
);

export default RedeCohortSection;
