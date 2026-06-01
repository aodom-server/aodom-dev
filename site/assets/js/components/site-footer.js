(function () {
  const { defineComponent, escapeHtml } = window.ResumeSite.ui;

  defineComponent("site-footer", (content) => {
    return `
      <footer class="site-footer">
        <div class="footer-inner">
          <span>${escapeHtml(content.name)}</span>
          <span>${escapeHtml(content.footer.note)}</span>
        </div>
      </footer>
    `;
  });
})();
