import { getFormUrl } from "@/lib/utm";

const items = [
  'Onboarding e diagnóstico completo', 'Planejamento estratégico', 'Assessment do time + trilha de desenvolvimento',
  '8 roteiros base escritos pela Blank', 'Mentoria semanal | time e empresário', 'Account manager dedicado — 120 dias',
  'Sessões com Rony, Renata e Erich', 'Comunidade ativa do cohort', 'Encontro presencial',
  '2 revisões 1:1 com consultor', 'Call de internalização de 3h',
];

const InvestimentoSection = () => (
  <section id="investimento" className="relative overflow-hidden" style={{ background: 'hsl(42 33% 92%)', borderBottom: '1px solid rgba(10,10,8,0.08)' }}>
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />

    <div className="relative z-10 px-6 md:px-[52px] pt-[72px] md:pt-[100px] pb-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">
        <div>
          <div className="font-mono-brand text-[14px] font-medium tracking-[4px] uppercase flex items-center gap-3.5 mb-6" style={{ color: 'rgba(10,10,8,0.45)' }}>
            <span className="w-5 h-px flex-shrink-0" style={{ background: 'rgba(10,10,8,0.25)' }} />
            Investimento
          </div>
          <h2 className="font-display font-normal leading-[0.96]" style={{ fontSize: 'clamp(40px, 5vw, 72px)', letterSpacing: '-2px', color: '#0C0C0A' }}>
            Seu canal mais lucrativo<br /><em className="italic" style={{ color: 'rgba(10,10,8,0.35)' }}>está disponível.</em><br />Basta ativá-lo.
          </h2>
        </div>
        <p className="text-[19px] font-light leading-[1.85] pt-0 md:pt-[52px]" style={{ color: 'rgba(10,10,8,0.65)' }}>
          O Influentes tem início, meio e fim definidos. Ao encerramento, a empresa opera de forma autônoma. Para quem quiser continuar, existe o Membership pós-programa — uma opção, não uma obrigação.
        </p>
      </div>
    </div>

    <div className="relative z-10 mx-6 md:mx-[52px] mb-[72px] md:mb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr]" style={{ background: '#0C0C0A', border: '1px solid rgba(240,237,230,0.07)', borderTop: '2px solid rgba(212,200,154,0.6)', boxShadow: '0 48px 96px rgba(0,0,0,0.3), 0 16px 40px rgba(0,0,0,0.18)' }}>
        <div className="p-[48px_40px] flex flex-col" style={{ borderRight: '1px solid rgba(240,237,230,0.06)' }}>
          <div className="font-mono-brand text-[13px] tracking-[3px] uppercase mb-5" style={{ color: 'rgba(240,237,230,0.55)' }}>Programa Influentes</div>
          <div className="font-display text-[32px] font-normal leading-[1.1] mb-3 text-cream" style={{ letterSpacing: '-1.5px' }}>
            Investimento<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.35)' }}>sob consulta.</em>
          </div>
          <p className="text-[17px] font-light leading-[1.75] mb-9 flex-1" style={{ color: 'rgba(240,237,230,0.68)' }}>
            Envie sua aplicação e nosso time de especialistas entrará em contato para apresentar o programa e o investimento.
          </p>
          <a href={getFormUrl()} target="_blank" rel="noopener noreferrer" className="block w-full py-4 text-center font-mono-brand text-[14px] font-medium tracking-[2px] uppercase bg-cream text-ink no-underline transition-opacity hover:opacity-[0.88] mb-3">Enviar Aplicação</a>
          <div className="font-mono-brand text-[14px] text-center leading-[1.6]" style={{ color: 'rgba(240,237,230,0.45)' }}>Entrada por candidatura · Vagas limitadas</div>
        </div>
        <div className="p-[48px_24px] md:p-[48px_44px] flex flex-col justify-between gap-7">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {items.map((item, i) => (
              <div key={i} className="flex gap-2.5 text-[17px] font-light py-2 items-baseline" style={{ color: 'rgba(240,237,230,0.88)', borderBottom: '1px solid rgba(240,237,230,0.05)' }}>
                <span className="font-mono-brand text-[14px] flex-shrink-0" style={{ color: 'rgba(212,200,154,0.7)' }}>✓</span>
                {item}
              </div>
            ))}
          </div>
          <div className="text-[16px] font-light leading-[1.7] pt-[18px]" style={{ color: 'rgba(240,237,230,0.5)', borderTop: '1px solid rgba(240,237,230,0.06)' }}>
            Membership pós-programa disponível para ex-alunos. Mais detalhes no encerramento.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestimentoSection;
