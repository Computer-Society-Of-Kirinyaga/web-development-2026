/**
 * Scroll Reveal & Animated Lines via Intersection Observer
 */
export function initAnimations() {
  const lines = document.querySelectorAll(".observe-line");
  if (!lines.length) return;

  const lineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.3 }
  );

  lines.forEach((line) => lineObserver.observe(line));
}
