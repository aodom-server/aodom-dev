(function () {
  const content = window.ResumeSite.content;
  const revealItems = document.querySelectorAll(".reveal");
  const sectionLinks = document.querySelectorAll(".nav-links a");
  const sections = Array.from(sectionLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 });

    sections.forEach((section) => sectionObserver.observe(section));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  document.querySelector("[data-print]")?.addEventListener("click", () => {
    window.print();
  });

  document.querySelector("[data-copy-email]")?.addEventListener("click", async (event) => {
    try {
      await navigator.clipboard.writeText(content.email);
      event.currentTarget.textContent = "Email copied";
    } catch {
      window.location.href = `mailto:${content.email}`;
    }
  });
})();
