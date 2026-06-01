(function () {
  const site = window.ResumeSite;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function buttonClass(variant) {
    if (variant === "primary") return "button button-primary";
    if (variant === "accent") return "button button-accent";
    return "button";
  }

  function sectionIntro(section) {
    return `
      <div class="reveal">
        <p class="section-label">${escapeHtml(section.label)}</p>
        <h2>${escapeHtml(section.title)}</h2>
        <p class="section-summary">${escapeHtml(section.summary)}</p>
      </div>
    `;
  }

  function tags(items) {
    return items.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  }

  function defineComponent(name, render) {
    if (customElements.get(name)) return;

    customElements.define(name, class extends HTMLElement {
      connectedCallback() {
        this.innerHTML = render(site.content);
      }
    });
  }

  site.ui = {
    buttonClass,
    defineComponent,
    escapeHtml,
    sectionIntro,
    tags
  };
})();
