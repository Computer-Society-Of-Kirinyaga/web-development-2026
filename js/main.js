/**
 * Main Application Initializer
 */
import { initNavigation } from "./navigation.js";
import { initBlogs } from "./blogs.js";
import { initContact } from "./contact.js";
import { initAnimations } from "./animations.js";

function bootstrap() {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 1.5,
      },
    });
  }

  initNavigation();
  initBlogs();
  initContact();
  initAnimations();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
