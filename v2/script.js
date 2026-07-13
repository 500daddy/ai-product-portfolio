const revealTargets = document.querySelectorAll(
  ".case-card, .pipeline, .evidence-table, .log-grid article, .contact"
);

revealTargets.forEach((element) => element.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((element) => revealObserver.observe(element));

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".topbar nav a");

const navObserver = new IntersectionObserver(
  (entries) => {
    const current = entries.find((entry) => entry.isIntersecting);
    if (!current) return;
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.hash === `#${current.target.id}`);
    });
  },
  { rootMargin: "-20% 0px -65% 0px" }
);

sections.forEach((section) => navObserver.observe(section));
