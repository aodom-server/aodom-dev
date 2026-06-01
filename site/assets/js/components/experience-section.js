(function () {
  const { defineComponent, escapeHtml, sectionIntro } = window.ResumeSite.ui;

  defineComponent("experience-section", (content) => {
    const items = content.experience.items
      .map((item) => `
        <article class="timeline-item reveal">
          <div class="timeline-meta">${escapeHtml(item.meta)}</div>
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </div>
        </article>
      `)
      .join("");

    return `
      <section class="section section-white" id="experience">
        <div class="section-inner section-grid">
          ${sectionIntro(content.experience)}
          <div class="timeline">${items}</div>
        </div>
      </section>
    `;
  });
})();
