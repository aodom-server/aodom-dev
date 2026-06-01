(function () {
  const { defineComponent, escapeHtml } = window.ResumeSite.ui;

  defineComponent("site-header", (content) => {
    const links = content.nav
      .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
      .join("");

    return `
      <header class="site-header" aria-label="Primary navigation">
        <div class="nav-shell">
          <a class="brand" href="#top" aria-label="${escapeHtml(content.name)} home">
            <span class="brand-mark" aria-hidden="true">AO</span>
            <span>${escapeHtml(content.name)}</span>
          </a>
          <nav class="nav-links" aria-label="Sections">${links}</nav>
          <a class="nav-cta" href="${escapeHtml(content.pdfPath)}" download>Download PDF</a>
        </div>
      </header>
    `;
  });
})();
