/**
 * Blogs & Insights Data Store & Interactive Reader Modal (Bento Grid)
 */
export const blogPosts = {
  "blog-1": {
    tag: "MERN Architecture",
    category: "Full Stack Deep Dive",
    date: "September 2026 • 6 min read",
    title: "Architecting Production-Ready MERN Applications for High Concurrency",
    body: `
      <p class="text-base leading-7 text-[#c4baaa] mb-4">
        Building a proof of concept with the MERN stack is straightforward, but scaling it in production to handle sustained concurrent traffic requires intentional architectural decisions across database indexing, API connection pooling, and stateless authentication.
      </p>
      
      <h4 class="text-lg font-bold text-white mt-6 mb-2">1. Connection Pooling &amp; Mongoose Query Tuning</h4>
      <p class="text-sm leading-6 text-[#9f978a] mb-4">
        Always configure maximum connection pool sizes (<code class="bg-white/10 px-1.5 py-0.5 rounded text-[#ff5b36]">maxPoolSize: 50</code>) and make heavy use of compound indexes for sorted queries. For read-heavy endpoints, utilize <code class="bg-white/10 px-1.5 py-0.5 rounded text-[#ff5b36]">.lean()</code> queries to bypass heavy Mongoose document hydration overhead, reducing memory footprint by up to 60%.
      </p>

      <h4 class="text-lg font-bold text-white mt-6 mb-2">2. Stateless Token Rotation with httpOnly Cookies</h4>
      <p class="text-sm leading-6 text-[#9f978a] mb-4">
        Store short-lived JWT access tokens in memory or httpOnly cookies with strict <code class="bg-white/10 px-1.5 py-0.5 rounded text-[#ff5b36]">SameSite=Strict</code> attributes. Offload refresh token invalidation to Redis or hashed MongoDB collections to enable instant revocation on logout.
      </p>

      <h4 class="text-lg font-bold text-white mt-6 mb-2">3. Graceful Error Handling &amp; Logging Pipelines</h4>
      <p class="text-sm leading-6 text-[#9f978a]">
        Centralize Express middleware handlers with structured status codes and custom exception wrappers so your API never crashes silently under unexpected edge conditions.
      </p>
    `
  },
  "blog-2": {
    tag: "Backend & SMS Gateways",
    category: "Real-World Case Study",
    date: "August 2026 • 4 min read",
    title: "Integrating Telecom SMS Gateways & Webhooks in Node.js",
    body: `
      <p class="text-base leading-7 text-[#c4baaa] mb-4">
        In real-world business platforms like Kriti Sublimation, timely SMS alerts keep customers informed regarding their application status, pickup notifications, and verification tokens.
      </p>
      
      <h4 class="text-lg font-bold text-white mt-6 mb-2">1. Unicode Handling &amp; Local Language Encoding</h4>
      <p class="text-sm leading-6 text-[#9f978a] mb-4">
        Unicode SMS messages have stricter character limits per segment (70 characters vs 160 GSM standard). Always sanitize, truncate, and properly encode text when delivering alerts in local languages like Nepali.
      </p>

      <h4 class="text-lg font-bold text-white mt-6 mb-2">2. Asynchronous Queue Processing</h4>
      <p class="text-sm leading-6 text-[#9f978a]">
        Avoid holding HTTP request threads waiting on third-party SMS API responses. Offload dispatching tasks to lightweight background workers with exponential backoff retries and webhook status callbacks.
      </p>
    `
  },
  "blog-3": {
    tag: "Frontend & UI Design",
    category: "Design Engineering",
    date: "July 2026 • 5 min read",
    title: "Building Luxury Dark Minimalist Interfaces with Tailwind CSS",
    body: `
      <p class="text-base leading-7 text-[#c4baaa] mb-4">
        Dark luxury interfaces require meticulous attention to contrast, subtle ambient glows, typography hierarchy, and smooth micro-interactions.
      </p>
      
      <h4 class="text-lg font-bold text-white mt-6 mb-2">1. The Power of Neutral Warm Grays</h4>
      <p class="text-sm leading-6 text-[#9f978a] mb-4">
        Avoid harsh pure blacks (#000000) and stark whites. Instead, harmonize near-black deep charcoal (<code class="bg-white/10 px-1.5 py-0.5 rounded text-[#ff5b36]">#090909</code>) with warm titanium bone highlights (<code class="bg-white/10 px-1.5 py-0.5 rounded text-[#ff5b36]">#d3c8b8</code>) and a signature electric accent.
      </p>

      <h4 class="text-lg font-bold text-white mt-6 mb-2">2. Custom Magnetic Cursors &amp; Micro-Interactions</h4>
      <p class="text-sm leading-6 text-[#9f978a]">
        Adding differential blend modes and scale transforms on interactive elements elevates user engagement while keeping performance silky smooth on 120Hz displays.
      </p>
    `
  },
  "blog-4": {
    tag: "Security & Auth",
    category: "Security Patterns",
    date: "June 2026 • 4 min read",
    title: "Zero-Trust Security & Rate Limiting in Express APIs",
    body: `
      <p class="text-base leading-7 text-[#c4baaa] mb-4">
        Public endpoints must be protected against brute force, DDoS, and payload poisoning without degrading the experience for legitimate users.
      </p>
      
      <h4 class="text-lg font-bold text-white mt-6 mb-2">1. Sliding-Window Rate Limiting</h4>
      <p class="text-sm leading-6 text-[#9f978a] mb-4">
        Implement Redis-backed sliding window rate limiters for authentication, SMS verification, and search routes to prevent abusive burst traffic.
      </p>

      <h4 class="text-lg font-bold text-white mt-6 mb-2">2. Request Sanitization &amp; Helmet Headers</h4>
      <p class="text-sm leading-6 text-[#9f978a]">
        Always enforce strict Content-Security-Policy, HSTS, X-Frame-Options headers and sanitize MongoDB queries against NoSQL injection vulnerabilities.
      </p>
    `
  }
};

export function openBlogModal(id) {
  const post = blogPosts[id];
  if (!post) return;

  const content = document.getElementById("blog-modal-content");
  if (content) {
    content.innerHTML = `
      <div class="mb-6 flex flex-wrap items-center gap-3">
        <span class="rounded-full bg-[#ff5b36]/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#ff5b36]">
          ${post.tag}
        </span>
        <span class="text-xs text-[#7d766c] uppercase tracking-wider font-mono">${post.category}</span>
        <span class="text-xs text-[#555]">•</span>
        <span class="text-xs text-[#7d766c] font-mono">${post.date}</span>
      </div>
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
        ${post.title}
      </h2>
      <div class="border-t border-white/10 pt-6">
        ${post.body}
      </div>
    `;
  }

  const modal = document.getElementById("blog-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
  if (window.refreshCursorTriggers) {
    window.refreshCursorTriggers();
  }
}

export function closeBlogModal() {
  const modal = document.getElementById("blog-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

export function initBlogs() {
  window.openBlogModal = openBlogModal;
  window.closeBlogModal = closeBlogModal;

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBlogModal();
  });

  const modal = document.getElementById("blog-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.id === "blog-modal") closeBlogModal();
    });
  }
}
