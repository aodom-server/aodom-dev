(function () {
  const { defineComponent, escapeHtml } = window.ResumeSite.ui;

  defineComponent("resume-download-section", (content) => {
    return `
      <section class="section section-white" id="resume">
        <div class="section-inner">
          <div class="resume-panel reveal">
            <div>
              <p class="section-label">${escapeHtml(content.resume.label)}</p>
              <h2>${escapeHtml(content.resume.title)}</h2>
              <p>${escapeHtml(content.resume.text)}</p>
            </div>
            <div class="button-row">
              <a class="button button-primary" href="${escapeHtml(content.pdfPath)}" download>Download PDF</a>
              <button class="button" type="button" data-print>Print page</button>
            </div>
          </div>
        </div>
      </section>
    `;
  });
})();
