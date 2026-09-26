/**
 * Navigation Bar — Full-Screen Slide Drawer & Scroll Spy
 */
export function initNavigation() {
  const menuBtn    = document.getElementById("mobile-menu-btn");
  const closeBtn   = document.getElementById("mobile-menu-close");
  const drawer     = document.getElementById("mobile-menu");
  const backdrop   = document.getElementById("mobile-menu-backdrop");
  const iconOpen   = document.getElementById("menu-icon-open");
  const iconClose  = document.getElementById("menu-icon-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function openMenu() {
    if (!drawer) return;
    drawer.classList.remove("translate-x-full");
    drawer.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.classList.remove("hidden");
    if (menuBtn)  menuBtn.setAttribute("aria-expanded", "true");
    if (iconOpen)  iconOpen.classList.add("hidden");
    if (iconClose) iconClose.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!drawer) return;
    drawer.classList.add("translate-x-full");
    drawer.setAttribute("aria-hidden", "true");
    if (backdrop) backdrop.classList.add("hidden");
    if (menuBtn)  menuBtn.setAttribute("aria-expanded", "false");
    if (iconOpen)  iconOpen.classList.remove("hidden");
    if (iconClose) iconClose.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (menuBtn)  menuBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (backdrop) backdrop.addEventListener("click", closeMenu);

  mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // ─── Scroll Spy ───────────────────────────────────────────────────────────
  const sections  = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 140;
      if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
}
