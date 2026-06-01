(function () {
  const { buttonClass, defineComponent, escapeHtml } = window.ResumeSite.ui;

  defineComponent("hero-section", (content) => {
    const hero = content.hero;
    const actions = hero.actions
      .map((action) => `
        <a class="${buttonClass(action.variant)}" href="${escapeHtml(action.href)}"${action.download ? " download" : ""}>
          ${escapeHtml(action.label)}
        </a>
      `)
      .join("");
    const proof = hero.proof
      .map((item) => `
        <div class="proof-tile">
          <span class="proof-kicker">${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.text)}</strong>
        </div>
      `)
      .join("");

    return `
      <section class="hero" id="top">
        <div class="hero-inner">
          <div class="hero-copy reveal">
            <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
            <h1>${escapeHtml(hero.title)}</h1>
            <p class="lead">${escapeHtml(hero.lead)}</p>
            <div class="hero-actions" aria-label="Primary actions">${actions}</div>
            <div class="hero-proof" aria-label="Highlights">${proof}</div>
          </div>
        </div>
      </section>
    `;
  });
})();
