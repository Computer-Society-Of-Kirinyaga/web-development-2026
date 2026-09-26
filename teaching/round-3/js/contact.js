/**
 * Interactive Contact Form Handler & Feedback Management
 */
export function handleContactSubmit(event) {
  if (event) event.preventDefault();
  const btn = document.getElementById("submit-btn");
  const successAlert = document.getElementById("form-success-alert");
  const form = document.getElementById("contact-form");

  if (!btn || !form) return;

  btn.disabled = true;
  btn.innerHTML = `<span>Sending...</span><i class="h-4 w-4 animate-spin" data-lucide="loader-2"></i>`;
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = `<span>Sent!</span><i class="h-4 w-4 text-emerald-400" data-lucide="check"></i>`;
    if (successAlert) successAlert.classList.remove("hidden");
    form.reset();
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      btn.innerHTML = `<span>Send Message</span><i class="h-4 w-4" data-lucide="send"></i>`;
      if (window.lucide) window.lucide.createIcons();
    }, 4000);
  }, 1000);
}

export function initContact() {
  window.handleContactSubmit = handleContactSubmit;
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleContactSubmit);
  }
}
