import { useState } from "react";

const faqs = [
  { q: 'É necessária experiência prévia com redes sociais?', a: 'Não. O programa parte do diagnóstico e constrói o posicionamento desde a base. O assessment do time identifica o ponto de partida e calibra o treinamento. Experiência anterior não é critério de seleção.' },
  { q: 'Quem da empresa precisa participar?', a: 'Você e ao menos uma pessoa de marketing. O time participa das mentorias operacionais; você das sessões estratégicas e com conselheiros. O restante roda sem demandar sua agenda executiva.' },
  { q: 'Qual a demanda de tempo para o fundador?', a: 'Mês 1: ~3h para onboarding e validação do plano. Meses 2–4: uma mentoria por mês + 3 revisões 1:1 ao longo do programa + sessões com conselheiros. O restante é conduzido pelo time.' },
  { q: 'O encontro presencial é durante o programa?', a: 'Não. Acontece 1 a 2 meses após o encerramento, quando você já operou de forma autônoma. A Blank realiza 3 encontros por ano e cada ex-aluno tem direito a 1 acesso por ano.' },
  { q: 'O que acontece ao fim dos 120 dias?', a: 'Time treinado, operação rodando e documentação completa dentro da empresa. O Membership pós-programa é opcional e sem contrato mínimo. Mais detalhes são apresentados no encerramento do programa.' },
  { q: 'Como funciona o processo de seleção?', a: 'Aplicação online seguida de uma call de qualificação com a Blank. Critérios: faturamento acima de R$ 10M e ao menos 1 profissional de marketing no time. Os setores são curados por complementaridade dentro do cohort.' },
  { q: 'Como funciona a trilha coletiva?', a: 'As 30 empresas têm acesso a um ambiente compartilhado para troca de feedback, análise cruzada de resultados e propostas de parceria. As sessões com conselheiros são abertas para perguntas de toda a turma.' },
  { q: 'O método funciona para qualquer setor?', a: 'Sim. O Influentes é construído sobre princípios de posicionamento que se aplicam independente do setor. A curadoria do cohort garante que os setores se complementem — não que sejam todos iguais.' },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-[72px] px-6 md:py-[100px] md:px-[52px] bg-ink" style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 md:gap-20">
        <div>
          <h2 className="font-display text-[36px] font-normal text-cream leading-none mb-3.5" style={{ letterSpacing: '-1.5px' }}>
            Perguntas<br /><em className="italic" style={{ color: 'rgba(240,237,230,0.3)' }}>comuns.</em>
          </h2>
          <p className="font-mono-brand text-[11px] leading-[1.7] mt-3.5" style={{ color: 'rgba(240,237,230,0.25)' }}>O que mais aparece nas calls de candidatura.</p>
        </div>
        <div style={{ borderTop: '1px solid rgba(240,237,230,0.08)' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(240,237,230,0.08)' }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
                className="w-full bg-transparent border-none text-left py-[18px] cursor-pointer flex justify-between items-center gap-4 transition-colors hover:text-cream"
                style={{ color: 'rgba(240,237,230,0.6)', fontSize: '13.5px', fontWeight: 400 }}
              >
                {f.q}
                <span
                  className="font-mono-brand text-[14px] flex-shrink-0 transition-all"
                  style={{ color: openIdx === i ? 'rgba(240,237,230,0.45)' : 'rgba(240,237,230,0.18)', transform: openIdx === i ? 'rotate(45deg)' : 'none' }}
                >+</span>
              </button>
              {openIdx === i && (
                <div className="text-[13px] font-light leading-[1.85] pb-[18px]" style={{ color: 'rgba(240,237,230,0.35)' }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
