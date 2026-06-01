(function () {
  const { defineComponent, escapeHtml, sectionIntro } = window.ResumeSite.ui;

  defineComponent("skills-section", (content) => {
    const skills = content.skills.items
      .map((skill) => `
        <div class="skill-pill reveal">
          ${escapeHtml(skill)}
          <span class="skill-dot" aria-hidden="true"></span>
        </div>
      `)
      .join("");

    return `
      <section class="section section-tint" id="skills">
        <div class="section-inner section-grid">
          ${sectionIntro(content.skills)}
          <div class="skill-grid" aria-label="Technical skills">${skills}</div>
        </div>
      </section>
    `;
  });
})();
