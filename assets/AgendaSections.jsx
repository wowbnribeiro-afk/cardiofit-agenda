// CardioFit — Agenda page sections
// Conversion page. Persona Maria 55-75 (cuidadora, mulher acima dos 50).
// Tom acolhedor, direto, sem jargão.

const AMPLIMED_URL = "https://agendaronline.amplimed.com.br/dr-bruno-nunes-ribeiro-9733";
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=553138238000";

function trackAmplimed() {
  if (window.fbq) window.fbq("trackCustom", "AgendaClick");
}
function trackWhatsApp() {
  if (window.fbq) window.fbq("trackCustom", "WhatsAppClick");
}

function AgendaHero() {
  return (
    <section className="hero-inner agenda-hero" data-screen-label="Agenda Hero">
      <div className="container">
        <div className="hero-inner-shell reveal">
          <span className="eyebrow">Teleconsulta cardiológica</span>
          <h1 className="hero-inner-display">Você cuida de todo mundo. Está na hora de ter um <em>cardiologista de referência</em> só seu.</h1>
          <p className="hero-inner-lead">Avaliação cardiovascular completa, por vídeo, do conforto da sua casa — com o mesmo cardiologista que atende no São Miguel Hospital, em Ipatinga.</p>
          <div className="hero-stage-actions" style={{ marginTop: 14 }}>
            <a className="button button-primary" href={AMPLIMED_URL} target="_blank" rel="noreferrer" onClick={trackAmplimed}>Agendar teleconsulta</a>
            <a className="button button-secondary" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={trackWhatsApp}>Atendimento presencial em Ipatinga</a>
          </div>
          <div className="hero-inner-meta">
            <span>Dr. Bruno Nunes · CRM-MG 48.227</span>
            <span>RQE 39950 · 39951</span>
            <span>Conforme Resolução CFM nº 2.314/2022</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaExpectativa() {
  const items = [
    "Avaliação cardiovascular completa, orientada à prevenção e longevidade",
    "Análise de exames recentes e revisão do histórico familiar",
    "Plano personalizado de investigação e conduta",
    "Foco em saúde cardiovascular feminina após os 50",
    "Continuidade clínica — não é consulta de evento, é linha de cuidado",
  ];
  return (
    <section className="compare" data-screen-label="O que esperar">
      <div className="container">
        <div className="compare-top reveal">
          <span className="eyebrow">Antes da consulta</span>
          <h2>O que esperar da consulta.</h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(5,10,15,0.7)", margin: 0, maxWidth: "60ch" }}>Sem jargão, sem urgência, sem checklist. O que está sob o capô — explicado pra você decidir.</p>
        </div>
        <ul className="agenda-list reveal">
          {items.map((it, i) => (
            <li key={i}>
              <span className="agenda-list-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="agenda-list-text">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AgendaComoFunciona() {
  const steps = [
    { num: "01", title: "Agendar", body: "Você escolhe o horário direto na agenda online da Amplimed. Sem ligação, sem espera." },
    { num: "02", title: "Conectar", body: "No dia, recebe o link da videochamada por e-mail. Sem app, sem download." },
    { num: "03", title: "Acompanhar", body: "Após a consulta, recebe o plano por escrito e uma janela de revisão definida." },
  ];
  return (
    <section className="process" data-screen-label="Como funciona">
      <div className="container">
        <div className="process-shell reveal">
          <div className="process-top">
            <span className="eyebrow">Como funciona</span>
            <h2 className="section-title section-title-light">Três passos. Sem mistério, sem fricção.</h2>
          </div>
          <div className="process-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {steps.map(s => (
              <div key={s.num} className="process-step">
                <span className="process-step-num">{`Etapa ${s.num}`}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaParaQuem() {
  const sim = [
    "Quer entender risco cardiovascular antes do exame alterado",
    "Já tem exames recentes e quer leitura individualizada",
    "Busca prevenção com profundidade, não checklist",
    "Pode investir em continuidade clínica — não evento único",
  ];
  const nao = [
    "Está em quadro agudo ou emergência (procure pronto-socorro)",
    "Espera prescrição imediata sem avaliação clínica",
    "Não tem exames recentes nem disponibilidade pra fazê-los",
    "Busca segunda opinião pontual sem seguimento",
  ];
  return (
    <section className="compare" data-screen-label="Para quem é">
      <div className="container">
        <div className="compare-top reveal">
          <span className="eyebrow">Honestidade clínica</span>
          <h2>Para quem é — e para quem não é.</h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(5,10,15,0.7)", margin: 0, maxWidth: "60ch" }}>Critério também serve pra dizer não. A teleconsulta funciona em casos específicos — não substitui pronto atendimento nem prescrição cega.</p>
        </div>
        <div className="compare-grid">
          <article className="compare-col compare-col-good reveal">
            <span className="compare-tag">É para você se</span>
            <h3>Faz sentido pra você</h3>
            <ul>{sim.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </article>
          <article className="compare-col compare-col-bad reveal">
            <span className="compare-tag">Não é para você se</span>
            <h3>Não é o canal certo</h3>
            <ul>{nao.map((s, i) => <li key={i}>{s}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function AgendaListaEspera() {
  return (
    <section className="lista-espera" data-screen-label="Contato prioritário">
      <div className="container">
        <div className="lista-espera-shell reveal">
          <div className="lista-espera-copy">
            <span className="eyebrow">Não encontrou o horário ideal?</span>
            <h2>Deixe seu contato — eu priorizo.</h2>
            <p>A agenda Amplimed está aberta e é o caminho mais rápido. Mas se os horários disponíveis não casam com a sua rotina — ou se você prefere conversar antes de marcar — me deixa seu contato aqui. Eu reviso pessoalmente e te respondo com janelas alternativas.</p>
            <p style={{ marginTop: 12, fontSize: "0.92rem", color: "var(--mist)" }}>Também útil pra quem ainda está decidindo se faz sentido clínico nesse momento.</p>
          </div>
          <div className="lista-espera-form">
            <iframe
              src="https://ab9a7428.sibforms.com/serve/MUIFAO9kTARIiry9DMGRJ5_VCzMQ1oLq9EtLlKMTnA_ScM3dQr8Fg-P3wDR6J-sNcbSaGBHCgIGEYWDhzTYJEJ2QCr1aQ96uKLIOd_n4fBuvR1_oDjn508WjOhQvxkZPj8UtY_I2RROmVbT8b4DIzI1FCugzmKR99BJNXoHyqwQemX57N-ZP3IMJI6Q9LcmcuhZLz2WwEWYzb3Q9qw=="
              title="Contato prioritário"
              loading="lazy"
              style={{ width: "100%", minHeight: 760, border: 0, borderRadius: 12, background: "transparent" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgendaCtaBottom() {
  return (
    <section className="cta-bottom" data-screen-label="Agendar CTA">
      <div className="container">
        <div className="cta-bottom-shell reveal">
          <span className="eyebrow">Pronto pra começar</span>
          <h2>Agende sua teleconsulta agora.</h2>
          <p>Marcação direta pela Amplimed. Atendimento presencial em Ipatinga pelo WhatsApp do São Miguel Hospital.</p>
          <div className="cta-bottom-actions">
            <a className="button button-primary" href={AMPLIMED_URL} target="_blank" rel="noreferrer" onClick={trackAmplimed}>Agendar teleconsulta</a>
            <a className="button button-secondary" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={trackWhatsApp}>Falar com o São Miguel Hospital</a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.AgendaHero = AgendaHero;
window.AgendaExpectativa = AgendaExpectativa;
window.AgendaComoFunciona = AgendaComoFunciona;
window.AgendaParaQuem = AgendaParaQuem;
window.AgendaListaEspera = AgendaListaEspera;
window.AgendaCtaBottom = AgendaCtaBottom;
