(function () {
  const { defineComponent, escapeHtml, sectionIntro, tags } = window.ResumeSite.ui;

  defineComponent("projects-section", (content) => {
    const cards = content.projects.cards
      .map((project) => {
        const target = project.local ? "" : ' target="_blank" rel="noreferrer"';

        return `
          <a class="project-card reveal" href="${escapeHtml(project.href)}"${target}>
            <div class="project-top">
              <span class="project-type">${escapeHtml(project.type)}</span>
              <span class="project-badge">${escapeHtml(project.badge)}</span>
            </div>
            <div class="project-body">
              <h3>${escapeHtml(project.title)}</h3>
              <p>${escapeHtml(project.text)}</p>
              <div class="tag-row" aria-label="Project stack">${tags(project.tags)}</div>
              <span class="project-link">${escapeHtml(project.linkText)}</span>
            </div>
          </a>
        `;
      })
      .join("");

    return `
      <section class="section section-tint" id="projects">
        <div class="section-inner section-grid">
          ${sectionIntro(content.projects)}
          <div class="project-grid">${cards}</div>
        </div>
      </section>
    `;
  });
})();
