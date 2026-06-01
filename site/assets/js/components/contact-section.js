(function () {
  const { defineComponent, escapeHtml } = window.ResumeSite.ui;

  defineComponent("contact-section", (content) => {
    return `
      <section class="section section-tint" id="contact">
        <div class="section-inner">
          <div class="contact-panel reveal">
            <div>
              <p class="section-label">${escapeHtml(content.contact.label)}</p>
              <h2>${escapeHtml(content.contact.title)}</h2>
              <p>${escapeHtml(content.contact.text)}</p>
              <div class="contact-links" aria-label="Contact links">
                <a href="mailto:${escapeHtml(content.email)}">${escapeHtml(content.email)}</a>
                <a href="${escapeHtml(content.githubUrl)}" target="_blank" rel="noreferrer">GitHub</a>
                <button type="button" data-copy-email>Copy email</button>
              </div>
            </div>
            <a class="button" href="mailto:${escapeHtml(content.email)}">Email Andrew</a>
          </div>
        </div>
      </section>
    `;
  });
})();
