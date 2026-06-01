(function () {
  const { defineComponent, escapeHtml, sectionIntro } = window.ResumeSite.ui;

  defineComponent("profile-section", (content) => {
    const cards = content.profile.features
      .map((feature, index) => `
        <article class="feature-card reveal">
          <span class="feature-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(feature.title)}</h3>
          <p>${escapeHtml(feature.text)}</p>
        </article>
      `)
      .join("");

    return `
      <section class="section section-white" id="profile">
        <div class="section-inner section-grid">
          ${sectionIntro(content.profile)}
          <div class="feature-grid">${cards}</div>
        </div>
      </section>
    `;
  });
})();
