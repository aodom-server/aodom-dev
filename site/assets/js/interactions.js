(function () {
  const revealItems = document.querySelectorAll(".reveal");
  const sectionLinks = document.querySelectorAll(".nav-links a");
  const sections = Array.from(sectionLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = "true";
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          if (isCurrent) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 });

    sections.forEach((section) => sectionObserver.observe(section));
  } else {
    revealItems.forEach((item) => {
      item.dataset.visible = "true";
    });
  }

  document.querySelector("[data-print]")?.addEventListener("click", () => {
    window.print();
  });

  document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const status = form.querySelector("[data-form-status]");

    if (status) {
      status.textContent = "Preview ready. A private endpoint still needs to be connected.";
    }
  });
})();
