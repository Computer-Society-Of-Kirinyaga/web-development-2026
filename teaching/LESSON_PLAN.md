# 🌐 Build Your Own Portfolio Website
### A Beginner's Guide — HTML, CSS & JavaScript

> **Who is this for?**
> Complete beginners who have never written a line of code before.
> No prior experience needed. We build everything together, step by step.

---

## 📁 Your Project Files

When you open the `starter/` folder you will see:

```
starter/
├── index.html          ← The page (structure)
├── assets/
│   └── hero.jpg        ← Your profile photo
├── css/
│   └── style.css       ← All visual styling (already written for you)
└── js/
    ├── main.js         ← Starts everything
    ├── navigation.js   ← Navbar & mobile drawer
    ├── blogs.js        ← Blog pop-up cards
    ├── contact.js      ← Contact form
    └── animations.js   ← Scroll animations
```

> **Before we start:** Open the `starter/` folder in VS Code.
> Install the **Live Server** extension → right-click `index.html` → **Open with Live Server**.
> Every time you save, the browser auto-refreshes. 🎉

---

## 🧠 The Big Picture — What Do the Three Languages Do?

| Language | Job | Real-life analogy |
|----------|-----|-------------------|
| **HTML** | Structure — what is on the page | The skeleton / walls of a building |
| **CSS** | Styling — how it looks | Paint, furniture, decoration |
| **JavaScript** | Behaviour — what it does | Electricity, lifts, automatic doors |

The **CSS** is already written for you in `css/style.css`.
Your job in this class is to write the **HTML** and **JavaScript**.

---

## 📚 Lessons Overview

| # | Lesson | What you build |
|---|--------|----------------|
| 1 | [Hello HTML](#lesson-1-hello-html) | Your very first webpage |
| 2 | [Head & Meta Tags](#lesson-2-head--meta-tags) | Page title, fonts, linking files |
| 3 | [Navigation Bar](#lesson-3-navigation-bar) | Fixed top bar with links + mobile drawer |
| 4 | [Hero Section](#lesson-4-hero-section) | Your name, title, photo |
| 5 | [About Section](#lesson-5-about-section) | Bio and statistics |
| 6 | [Tech Stack Marquee](#lesson-6-tech-stack-marquee) | Scrolling skills strip + chips |
| 7 | [Projects Section](#lesson-7-projects-section) | Sticky stacking project cards |
| 8 | [Blogs Section](#lesson-8-blogs-section) | Bento grid + modal pop-up |
| 9 | [Contact Section](#lesson-9-contact-section) | Info cards + message form |
| 10 | [Footer](#lesson-10-footer) | Copyright and social links |
| 11 | [JS — Navigation](#lesson-11-js--navigation) | Mobile drawer, scroll spy |
| 12 | [JS — Blogs](#lesson-12-js--blogs) | Modal open/close |
| 13 | [JS — Contact Form](#lesson-13-js--contact-form) | Form validation & feedback |
| 14 | [JS — Animations](#lesson-14-js--animations) | Scroll-in effects |

---

## Lesson 1: Hello HTML

### What is HTML?

HTML stands for **HyperText Markup Language**.
It uses **tags** to label every piece of content on a page.

```
<tagname>content here</tagname>
  ↑ opening tag          ↑ closing tag
```

### Every HTML file must start with this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My Page</title>
  </head>
  <body>
    Hello world!
  </body>
</html>
```

| Part | What it means |
|------|--------------|
| `<!DOCTYPE html>` | Tells the browser "this is HTML5" |
| `<html>` | The root — everything lives inside this |
| `<head>` | Hidden settings (the visitor does not see this) |
| `<title>` | The text shown in the browser tab |
| `<body>` | Everything the visitor actually sees |

### ✏️ Your turn
Open `index.html`. Find `[STUDENT NAME]` in the `<title>` tag and replace it with the student's real name.

---

## Lesson 2: Head & Meta Tags

The `<head>` section holds settings and links to external files.

### What is already in your `<head>`:

```html
<!-- Stops phones from zooming in weirdly -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Tailwind CSS — ready-made style class names from the internet -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Lucide Icons — a library of clean, modern icons -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Google Fonts — loads the "Inter" font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

<!-- Our own CSS file -->
<link rel="stylesheet" href="css/style.css" />
```

> **Key idea:**
> `<link>` connects an external file (CSS, font) to your page.
> `<script>` loads JavaScript — either from the internet or your own files.

---

## Lesson 3: Navigation Bar

### New HTML tags

| Tag | Purpose |
|-----|---------|
| `<header>` | The top section of a page |
| `<nav>` | A group of navigation links |
| `<a href="...">` | A clickable link |
| `<button>` | A clickable button |
| `<i>` | Used here to hold a Lucide icon |

`href="#about"` means **"jump to the element with `id="about"` on this same page"**.

### ✏️ Replace the `<header>` placeholder in `index.html` with:

```html
<header id="navbar" class="fixed inset-x-0 top-0 z-50 bg-[#090909]/80 backdrop-blur-md border-b border-white/[0.08] transition-all duration-300">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">

    <!-- Logo / Name -->
    <a href="#home" class="flex items-center gap-3 group">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-[#d3c8b8] text-[#090909] group-hover:bg-[#ff5b36] group-hover:text-white transition-all">
        <i class="h-5 w-5" data-lucide="code-2"></i>
      </div>
      <div class="flex flex-col">
        <span class="text-base font-bold text-[#d3c8b8]">[STUDENT NAME]</span>
        <span class="text-[11px] uppercase tracking-[0.2em] text-[#7d766c]">Web Developer</span>
      </div>
    </a>

    <!-- Desktop nav links — hidden on small screens -->
    <nav class="hidden md:flex items-center gap-8">
      <a class="nav-link text-sm font-semibold uppercase tracking-[0.18em] text-[#9a9183] hover:text-[#d3c8b8] transition-colors" href="#home">Home</a>
      <a class="nav-link text-sm font-semibold uppercase tracking-[0.18em] text-[#9a9183] hover:text-[#d3c8b8] transition-colors" href="#about">About</a>
      <a class="nav-link text-sm font-semibold uppercase tracking-[0.18em] text-[#9a9183] hover:text-[#d3c8b8] transition-colors" href="#projects">Projects</a>
      <a class="nav-link text-sm font-semibold uppercase tracking-[0.18em] text-[#9a9183] hover:text-[#d3c8b8] transition-colors" href="#blogs">Blogs</a>
      <a class="nav-link text-sm font-semibold uppercase tracking-[0.18em] text-[#9a9183] hover:text-[#d3c8b8] transition-colors" href="#contact">Contact</a>
    </nav>

    <!-- "Let's Talk" button — desktop only -->
    <div class="hidden md:flex">
      <a href="#contact" class="inline-flex items-center gap-2 rounded-full border border-[#ff5b36]/40 bg-[#ff5b36]/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#ff5b36] hover:bg-[#ff5b36] hover:text-white transition-all">
        <span>Let's Talk</span>
        <i class="h-3.5 w-3.5" data-lucide="arrow-up-right"></i>
      </a>
    </div>

    <!-- Hamburger button — mobile only -->
    <button id="mobile-menu-btn" type="button"
      class="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#111] text-[#d3c8b8] hover:border-[#ff5b36] hover:text-[#ff5b36] transition-colors focus:outline-none"
      aria-label="Open menu" aria-expanded="false">
      <i id="menu-icon-open" class="h-5 w-5" data-lucide="menu"></i>
      <i id="menu-icon-close" class="h-5 w-5 hidden" data-lucide="x"></i>
    </button>
  </div>
</header>

<!-- Mobile full-screen drawer — lives OUTSIDE the header -->
<div id="mobile-menu"
  style="transform: translateX(100%); transition: transform 0.3s ease-in-out;"
  class="fixed inset-0 z-40 flex flex-col bg-[#090909] md:hidden"
  aria-hidden="true">

  <!-- Drawer top bar -->
  <div class="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
    <span class="text-sm font-bold text-[#d3c8b8]">[STUDENT NAME]</span>
    <button id="mobile-menu-close" type="button"
      class="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#111] text-[#d3c8b8] hover:border-[#ff5b36] hover:text-[#ff5b36] transition-colors focus:outline-none">
      <i class="h-5 w-5" data-lucide="x"></i>
    </button>
  </div>

  <!-- Drawer nav links -->
  <nav class="flex flex-col flex-1 justify-center px-8 gap-2">
    <a href="#home"     class="mobile-nav-link group flex items-center justify-between py-5 border-b border-white/[0.06]">
      <div class="flex items-center gap-4">
        <span class="text-xs font-mono text-[#ff5b36]">01</span>
        <span class="text-3xl font-bold uppercase text-[#d3c8b8] group-hover:text-white transition-colors">Home</span>
      </div>
      <i class="h-5 w-5 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
    </a>
    <a href="#about"    class="mobile-nav-link group flex items-center justify-between py-5 border-b border-white/[0.06]">
      <div class="flex items-center gap-4">
        <span class="text-xs font-mono text-[#ff5b36]">02</span>
        <span class="text-3xl font-bold uppercase text-[#d3c8b8] group-hover:text-white transition-colors">About</span>
      </div>
      <i class="h-5 w-5 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
    </a>
    <a href="#projects" class="mobile-nav-link group flex items-center justify-between py-5 border-b border-white/[0.06]">
      <div class="flex items-center gap-4">
        <span class="text-xs font-mono text-[#ff5b36]">03</span>
        <span class="text-3xl font-bold uppercase text-[#d3c8b8] group-hover:text-white transition-colors">Projects</span>
      </div>
      <i class="h-5 w-5 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
    </a>
    <a href="#blogs"    class="mobile-nav-link group flex items-center justify-between py-5 border-b border-white/[0.06]">
      <div class="flex items-center gap-4">
        <span class="text-xs font-mono text-[#ff5b36]">04</span>
        <span class="text-3xl font-bold uppercase text-[#d3c8b8] group-hover:text-white transition-colors">Blogs</span>
      </div>
      <i class="h-5 w-5 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
    </a>
    <a href="#contact"  class="mobile-nav-link group flex items-center justify-between py-5">
      <div class="flex items-center gap-4">
        <span class="text-xs font-mono text-[#ff5b36]">05</span>
        <span class="text-3xl font-bold uppercase text-[#d3c8b8] group-hover:text-white transition-colors">Contact</span>
      </div>
      <i class="h-5 w-5 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
    </a>
  </nav>

  <!-- Drawer footer -->
  <div class="px-8 py-8 border-t border-white/[0.08]">
    <a href="#contact" class="mobile-nav-link inline-flex items-center gap-2 rounded-full bg-[#ff5b36] px-6 py-3 text-sm font-bold uppercase text-white hover:bg-[#ff7352] transition-all">
      <span>Let's Talk</span>
      <i class="h-4 w-4" data-lucide="arrow-up-right"></i>
    </a>
  </div>
</div>

<!-- Dark backdrop behind the drawer -->
<div id="mobile-menu-backdrop" class="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm hidden md:hidden"></div>
```

> **Tailwind tip:**
> `hidden md:flex` means "hidden on small screens, flex layout on screens ≥ 768px".
> This is how we make things **responsive** (adapt to screen size).

---

## Lesson 4: Hero Section

### New tags

| Tag | Purpose |
|-----|---------|
| `<section>` | A thematic group of content |
| `<h1>` | The biggest, most important heading |
| `<p>` | A paragraph of text |
| `<img src="..." alt="...">` | Displays an image |
| `<div>` | A generic container box |

### ✏️ Replace the Hero `<section id="home">` placeholder with:

```html
<section id="home" class="relative flex min-h-screen items-center px-6 pt-32 pb-20 md:px-10 md:pt-40">
  <div class="absolute inset-0 soft-glow pointer-events-none"></div>

  <div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">

    <!-- Left: Text -->
    <div class="lg:col-span-7">
      <p class="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#7d766c]">
        Web Developer — [YOUR CITY], [YOUR COUNTRY]
      </p>
      <h1 class="text-6xl font-semibold uppercase leading-none tracking-tight text-[#d3c8b8] sm:text-7xl md:text-8xl lg:text-[10.5rem]">
        <span class="hero-word" style="animation-delay:0.08s"> I </span>
        <span class="hero-word" style="animation-delay:0.16s"> build </span><br/>
        <span class="hero-word text-[#ff5b36]" style="animation-delay:0.24s"> fast </span>
        <span class="hero-word" style="animation-delay:0.32s"> digital </span><br/>
        <span class="hero-word" style="animation-delay:0.4s"> products </span>
      </h1>
      <p class="mt-8 max-w-2xl text-lg leading-8 text-[#9f978a] md:text-xl">
        [One or two sentences about what you build and who you help.]
      </p>
      <div class="mt-10 flex flex-wrap items-center gap-4">
        <a href="#projects" class="inline-flex items-center gap-3 rounded-full bg-[#ff5b36] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#ff7352] hover:shadow-[0_0_24px_rgba(255,91,54,0.45)] transition-all">
          <span>Explore Projects</span>
          <i class="h-4 w-4" data-lucide="arrow-down-right"></i>
        </a>
        <a href="#contact" class="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#d3c8b8] hover:bg-white/10 transition-all">
          <span>Get in Touch</span>
          <i class="h-4 w-4" data-lucide="mail"></i>
        </a>
      </div>
    </div>

    <!-- Right: Profile photo -->
    <div class="lg:col-span-5 lg:justify-self-end w-full max-w-[420px] mx-auto lg:mx-0 lg:-mt-16">
      <div class="relative group">
        <div class="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#ff5b36]/25 to-transparent blur-3xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
        <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] p-3 shadow-2xl shadow-black">
          <div class="relative overflow-hidden rounded-[1.5rem] h-[420px] sm:h-[500px] md:h-[540px] lg:h-[580px] bg-[#181818]">
            <img
              src="assets/hero.jpg"
              alt="[STUDENT NAME] — Web Developer"
              class="h-full w-full object-cover object-top grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.03] transition duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#090909]/70 via-transparent to-transparent"></div>
            <!-- Floating name badge -->
            <div class="absolute bottom-4 inset-x-4 rounded-xl border border-white/15 bg-[#0a0a0a]/85 backdrop-blur-md p-4 flex items-center justify-between">
              <div>
                <p class="text-sm font-bold text-white">[STUDENT NAME]</p>
                <p class="text-xs font-mono uppercase tracking-wider text-[#9f978a]">Web Developer</p>
              </div>
              <div class="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff5b36]/20 text-[#ff5b36]">
                <i class="h-4 w-4" data-lucide="code-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

> Replace `[STUDENT NAME]`, `[YOUR CITY]`, `[YOUR COUNTRY]` with real details.
> Put the student's photo in `assets/` and make sure `src="assets/hero.jpg"` matches.

---

## Lesson 5: About Section

### Semantic HTML — tags that describe meaning

| Tag | Meaning |
|-----|---------|
| `<h2>` | Second-level heading |
| `<ul>` / `<li>` | Unordered list / list item |
| `<strong>` | Bold, important text |
| `<em>` | Italic, emphasised text |

### ✏️ Replace the About `<section id="about">` placeholder with:

```html
<section class="relative px-6 py-24 md:px-10 md:py-32" id="about">
  <div class="mx-auto max-w-7xl">
    <div class="mb-10 flex items-center justify-between">
      <p class="text-sm font-semibold uppercase tracking-[0.35em] text-[#bfb4a3] flex items-center gap-3">
        <span class="h-1.5 w-6 bg-[#ff5b36]"></span>About Me
      </p>
      <span class="text-xs font-mono uppercase tracking-widest text-[#7d766c]">01 / OVERVIEW</span>
    </div>
    <div class="max-w-6xl">
      <h2 class="text-5xl font-semibold leading-[0.94] tracking-tight text-[#d3c8b8] sm:text-6xl md:text-7xl lg:text-[6.8rem]">
        <span class="about-line">I'm a <span class="highlight"> passionate </span></span>
        <span class="about-line"><span class="highlight"> developer </span> who</span>
        <span class="about-line">loves building</span>
        <span class="about-line">things for the</span>
        <span class="about-line">web<span class="text-[#ff5b36]"> . </span></span>
      </h2>
      <p class="mt-10 max-w-3xl text-lg leading-8 text-[#8d8579] md:text-xl">
        [Write 2–3 sentences about yourself — what you study, what you enjoy building, your goal.]
      </p>
      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-white/10 pt-10">
        <div class="space-y-1">
          <div class="text-3xl sm:text-4xl font-bold text-[#d3c8b8]">1+ <span class="text-[#ff5b36]">Yr</span></div>
          <div class="text-xs uppercase tracking-wider text-[#7d766c]">Learning</div>
        </div>
        <div class="space-y-1">
          <div class="text-3xl sm:text-4xl font-bold text-[#d3c8b8]">5+</div>
          <div class="text-xs uppercase tracking-wider text-[#7d766c]">Projects Built</div>
        </div>
        <div class="space-y-1">
          <div class="text-3xl sm:text-4xl font-bold text-[#d3c8b8]">100%</div>
          <div class="text-xs uppercase tracking-wider text-[#7d766c]">Dedication</div>
        </div>
        <div class="space-y-1">
          <div class="text-3xl sm:text-4xl font-bold text-[#d3c8b8]">∞</div>
          <div class="text-xs uppercase tracking-wider text-[#7d766c]">Curiosity</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Lesson 6: Tech Stack Marquee

A **marquee** is a strip of text that scrolls continuously. The CSS animation `.marquee-wrapper` is already written in `style.css`.

### ✏️ Paste this after the About section divider:

```html
<section class="overflow-hidden border-y border-white/5 bg-[#0b0b0b] py-16 text-[#d3c8b8] md:py-20">

  <!-- Scrolling text -->
  <div class="marquee-wrapper gap-8 whitespace-nowrap text-5xl font-semibold uppercase tracking-tight opacity-95 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
    <span> HTML </span>       <span class="text-[#ff5b36]">·</span>
    <span> CSS </span>        <span class="text-[#ff5b36]">·</span>
    <span> JavaScript </span> <span class="text-[#ff5b36]">·</span>
    <span> [YOUR SKILL] </span><span class="text-[#ff5b36]">·</span>
    <!-- Duplicate text so the loop is seamless -->
    <span> HTML </span>       <span class="text-[#ff5b36]">·</span>
    <span> CSS </span>        <span class="text-[#ff5b36]">·</span>
    <span> JavaScript </span> <span class="text-[#ff5b36]">·</span>
    <span> [YOUR SKILL] </span><span class="text-[#ff5b36]">·</span>
  </div>

  <!-- Skill chips -->
  <div class="mx-auto mt-12 flex max-w-7xl flex-wrap items-center gap-3.5 px-6 md:px-10">
    <div class="rounded-full border border-white/20 bg-[#121212] px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#d3c8b8] hover:border-[#ff5b36] hover:bg-[#ff5b36]/10 hover:text-white transition-all">
      HTML / 1yr
    </div>
    <div class="rounded-full border border-white/20 bg-[#121212] px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#d3c8b8] hover:border-[#ff5b36] hover:bg-[#ff5b36]/10 hover:text-white transition-all">
      CSS / 1yr
    </div>
    <div class="rounded-full border border-white/20 bg-[#121212] px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#d3c8b8] hover:border-[#ff5b36] hover:bg-[#ff5b36]/10 hover:text-white transition-all">
      JavaScript / Learning
    </div>
    <!-- Add more chips for other skills -->
  </div>
</section>
```

---

## Lesson 7: Projects Section

### The Sticky Stacking Effect

Each card uses the class `sticky-project-card` from `style.css`. As you scroll, each card sticks to the screen and the next one slides on top of it.

For this to work correctly:
- Card 1 → `z-10` and `bg-[#0d0d0d]`
- Card 2 → `z-20` and `bg-[#111111]`
- Card 3 → `z-30` and `bg-[#131313]`

### ✏️ Replace the Projects `<section id="projects">` placeholder with:

```html
<section class="bg-[#090909] px-6 py-24 md:px-10 md:py-32" id="projects">
  <div class="mx-auto max-w-7xl">
    <div class="mb-16 flex items-center justify-between">
      <div class="flex items-center gap-6 flex-1">
        <h2 class="text-4xl font-semibold uppercase tracking-tight text-[#d3c8b8] md:text-5xl">Featured Work</h2>
        <div class="h-px flex-1 bg-white/10"></div>
      </div>
      <span class="hidden sm:inline-block ml-6 text-xs font-mono uppercase tracking-widest text-[#7d766c]">02 / PROJECTS</span>
    </div>

    <div class="sticky-stack-container space-y-12 md:space-y-20">

      <!-- Project Card 1 -->
      <div class="sticky-project-card z-10 group grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 sm:p-12 md:p-14 lg:p-16 min-h-[520px] md:min-h-[580px] lg:min-h-[620px] shadow-2xl shadow-black">
        <!-- Text side -->
        <div class="order-2 flex flex-col justify-between lg:order-1 lg:col-span-7">
          <div>
            <div class="flex items-center gap-3 mb-6">
              <span class="rounded-full bg-[#ff5b36]/15 border border-[#ff5b36]/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5b36]">
                01 / Project
              </span>
            </div>
            <h3 class="mb-5 text-3xl sm:text-4xl font-bold tracking-tight text-white">[Your First Project Name]</h3>
            <p class="mb-6 text-base md:text-lg leading-8 text-[#9b9387]">
              [What does this project do? Who is it for? 2–3 sentences.]
            </p>
            <ul class="mb-8 space-y-3.5 text-sm md:text-base leading-7 text-[#c4baaa]">
              <li class="flex items-start gap-3"><span class="text-[#ff5b36] font-bold">✓</span><span>[Feature 1]</span></li>
              <li class="flex items-start gap-3"><span class="text-[#ff5b36] font-bold">✓</span><span>[Feature 2]</span></li>
              <li class="flex items-start gap-3"><span class="text-[#ff5b36] font-bold">✓</span><span>[Feature 3]</span></li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-2.5 pt-6 border-t border-white/[0.08]">
            <span class="rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-mono text-[#b8ad9e]">HTML</span>
            <span class="rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-mono text-[#b8ad9e]">CSS</span>
            <span class="rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-mono text-[#b8ad9e]">JavaScript</span>
          </div>
        </div>
        <!-- Visual side -->
        <div class="order-1 lg:order-2 lg:col-span-5 flex items-center">
          <div class="project-img-container rounded-2xl w-full flex h-80 sm:h-96 md:h-[440px] lg:h-[500px] items-center justify-center border border-white/10 bg-[#141414] p-8">
            <div class="text-center">
              <div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff5b36]/10 text-[#ff5b36]">
                <i class="h-8 w-8" data-lucide="layout-dashboard"></i>
              </div>
              <div class="text-[#d3c8b8] font-bold uppercase tracking-widest text-sm">[Project Name]</div>
              <div class="mt-2 text-xs opacity-70 tracking-widest text-[#9f978a]">(Hover to preview)</div>
            </div>
            <div class="project-img-overlay rounded-2xl">
              <a href="#" target="_blank" class="inline-flex items-center gap-3 text-2xl font-bold uppercase text-white hover:scale-105 transition-transform">
                View Project <i class="h-6 w-6" data-lucide="external-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--
        TODO: Copy the card block above twice more.
        Card 2: change z-10 → z-20, bg-[#0d0d0d] → bg-[#111111], bg-[#141414] → bg-[#161616]
        Card 3: change z-10 → z-30, bg-[#0d0d0d] → bg-[#131313], bg-[#141414] → bg-[#181818]
        Update the title, description, features, and links for each.
      -->

    </div>
  </div>
</section>
```

---

## Lesson 8: Blogs Section

### What is a Bento Grid?

A bento grid is a layout where cards have **different widths**. We use `md:col-span-8` (wide) and `md:col-span-4` (narrow) inside a 12-column grid.

### ✏️ Replace the Blogs `<section id="blogs">` placeholder with:

```html
<section class="bg-[#090909] px-6 py-24 md:px-10 md:py-32" id="blogs">
  <div class="mx-auto max-w-7xl">
    <div class="mb-16 flex items-center justify-between">
      <div class="flex items-center gap-6 flex-1">
        <h2 class="text-4xl font-semibold uppercase tracking-tight text-[#d3c8b8] md:text-5xl">Blogs &amp; Insights</h2>
        <div class="h-px flex-1 bg-white/10"></div>
      </div>
      <span class="hidden sm:inline-block ml-6 text-xs font-mono uppercase tracking-widest text-[#7d766c]">03 / ARTICLES</span>
    </div>
    <p class="max-w-2xl text-lg text-[#8d8579] mb-12">Things I have learned, built, and discovered on my coding journey.</p>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">

      <!-- Wide card (8 cols) -->
      <article class="bento-card md:col-span-8 group flex flex-col justify-between p-8 md:p-10">
        <div>
          <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span class="rounded-full bg-[#ff5b36]/20 border border-[#ff5b36]/40 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5b36]">Featured</span>
            <span class="text-xs font-mono text-[#7d766c]">Sep 2026 · 5 min read</span>
          </div>
          <h3 class="mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#ff5b36] transition-colors">
            [Your First Blog Post Title]
          </h3>
          <p class="text-sm sm:text-base leading-7 text-[#9f978a]">
            [2–3 sentence summary of what this blog post is about.]
          </p>
        </div>
        <div class="pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <span class="text-xs text-[#7d766c]">By [STUDENT NAME]</span>
          <button type="button" onclick="openBlogModal('blog-1')"
            class="inline-flex items-center gap-2 rounded-full bg-[#ff5b36] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ff7352] transition-all">
            <span>Read Article</span>
            <i class="h-3.5 w-3.5" data-lucide="arrow-right"></i>
          </button>
        </div>
      </article>

      <!-- Narrow card (4 cols) -->
      <article class="bento-card md:col-span-4 group flex flex-col justify-between p-8">
        <div>
          <div class="flex items-center justify-between gap-2 mb-6">
            <span class="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">Tutorial</span>
            <span class="text-xs font-mono text-[#7d766c]">Sep 2026 · 4 min</span>
          </div>
          <h3 class="mb-3 text-xl font-bold tracking-tight text-white group-hover:text-[#ff5b36] transition-colors">
            [Second Blog Title]
          </h3>
          <p class="text-sm leading-7 text-[#9f978a]">[Short description — 1–2 sentences.]</p>
        </div>
        <div class="pt-5 border-t border-white/[0.08]">
          <button type="button" onclick="openBlogModal('blog-2')"
            class="text-xs font-semibold uppercase tracking-wider text-[#ff5b36] hover:underline">
            Read →
          </button>
        </div>
      </article>

      <!-- Add more cards: use col-span-4, col-span-6, or col-span-8 -->

    </div>
  </div>
</section>

<!-- Blog modal pop-up -->
<div id="blog-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/80 backdrop-blur-sm px-4">
  <div class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 md:p-12 shadow-2xl">
    <div class="flex items-start justify-between mb-8">
      <div>
        <span id="modal-category" class="rounded-full bg-[#ff5b36]/15 border border-[#ff5b36]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ff5b36]"></span>
        <p id="modal-meta" class="mt-3 text-xs text-[#7d766c]"></p>
      </div>
      <button onclick="closeBlogModal()" type="button"
        class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#181818] text-[#9f978a] hover:border-[#ff5b36] hover:text-[#ff5b36] transition-colors">
        <i class="h-4 w-4" data-lucide="x"></i>
      </button>
    </div>
    <h2 id="modal-title" class="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6"></h2>
    <div id="modal-content" class="text-[#9b9387] leading-8 text-base space-y-4"></div>
  </div>
</div>
```

---

## Lesson 9: Contact Section

### Form tags

| Tag | Purpose |
|-----|---------|
| `<form>` | Wraps all inputs together |
| `<label>` | Describes what an input is for (important for accessibility) |
| `<input>` | One-line text field |
| `<textarea>` | Multi-line text field |
| `<button type="submit">` | The send button |

### ✏️ Replace the Contact `<section id="contact">` placeholder with:

```html
<section class="bg-[#0a0a0a] px-6 py-24 md:px-10 md:py-32" id="contact">
  <div class="mx-auto max-w-7xl">
    <div class="mb-16">
      <div class="flex items-center justify-between mb-8">
        <p class="text-xs font-medium uppercase tracking-[0.3em] text-[#7d766c]">Get In Touch</p>
        <span class="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#7d766c]">04 / CONTACT</span>
      </div>
      <h2 class="text-5xl font-semibold uppercase leading-none tracking-tight text-[#d3c8b8] md:text-7xl lg:text-[7.5rem]">
        Let's build<br /><span class="text-[#ff5b36]">something.</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">

      <!-- Left: Info cards -->
      <div class="lg:col-span-5 flex flex-col space-y-10">
        <div>
          <p class="text-lg leading-8 text-[#9b9387]">Have a project in mind? Want to collaborate? Send me a message!</p>
          <div class="mt-10 space-y-4">

            <a href="mailto:[YOUR EMAIL]" class="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0e0e0e] p-5 transition-all hover:border-[#ff5b36]/40 hover:bg-[#ff5b36]/5">
              <div class="flex items-center gap-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff5b36]/10 text-[#ff5b36]"><i class="h-5 w-5" data-lucide="mail"></i></div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-[#7d766c]">Email</p>
                  <p class="text-base font-medium text-[#d3c8b8] group-hover:text-white transition-colors">[YOUR EMAIL]</p>
                  <p class="text-sm text-[#7d766c]">Click to send a message</p>
                </div>
              </div>
              <i class="h-4 w-4 shrink-0 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
            </a>

            <a href="https://github.com/[YOUR GITHUB]" target="_blank" class="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0e0e0e] p-5 transition-all hover:border-[#ff5b36]/40 hover:bg-[#ff5b36]/5">
              <div class="flex items-center gap-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff5b36]/10 text-[#ff5b36]"><i class="h-5 w-5" data-lucide="github"></i></div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-[#7d766c]">GitHub</p>
                  <p class="text-base font-medium text-[#d3c8b8] group-hover:text-white transition-colors">github.com/[YOUR GITHUB]</p>
                  <p class="text-sm text-[#7d766c]">View my projects</p>
                </div>
              </div>
              <i class="h-4 w-4 shrink-0 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
            </a>

            <a href="https://linkedin.com/in/[YOUR LINKEDIN]" target="_blank" class="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0e0e0e] p-5 transition-all hover:border-[#ff5b36]/40 hover:bg-[#ff5b36]/5">
              <div class="flex items-center gap-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff5b36]/10 text-[#ff5b36]"><i class="h-5 w-5" data-lucide="linkedin"></i></div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-[#7d766c]">LinkedIn</p>
                  <p class="text-base font-medium text-[#d3c8b8] group-hover:text-white transition-colors">linkedin.com/in/[YOUR LINKEDIN]</p>
                  <p class="text-sm text-[#7d766c]">Connect professionally</p>
                </div>
              </div>
              <i class="h-4 w-4 shrink-0 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
            </a>

            <a href="tel:[YOUR PHONE]" class="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0e0e0e] p-5 transition-all hover:border-[#ff5b36]/40 hover:bg-[#ff5b36]/5">
              <div class="flex items-center gap-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ff5b36]/10 text-[#ff5b36]"><i class="h-5 w-5" data-lucide="map-pin"></i></div>
                <div>
                  <p class="text-xs uppercase tracking-[0.2em] text-[#7d766c]">Location &amp; Phone</p>
                  <p class="text-base font-medium text-[#d3c8b8] group-hover:text-white transition-colors">[YOUR CITY], [YOUR COUNTRY]</p>
                  <p class="text-sm text-[#7d766c]">[YOUR PHONE]</p>
                </div>
              </div>
              <i class="h-4 w-4 shrink-0 text-[#3d3830] group-hover:text-[#ff5b36] transition-colors" data-lucide="arrow-up-right"></i>
            </a>

          </div>
        </div>
      </div>

      <!-- Right: Message form -->
      <div class="lg:col-span-7">
        <div class="rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 md:p-12 shadow-2xl">
          <h3 class="text-2xl font-bold tracking-tight text-[#d3c8b8] mb-2">Send a Message</h3>
          <p class="text-sm text-[#7d766c] mb-8">Fill out the form and I'll get back to you soon.</p>
          <form id="contact-form" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-xs font-semibold uppercase tracking-[0.16em] text-[#9f978a] mb-2" for="name">Your Name *</label>
                <input id="name" name="name" type="text" required placeholder="e.g. John Doe"
                  class="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-3.5 text-sm text-[#d3c8b8] placeholder-[#555] focus:border-[#ff5b36] focus:bg-[#181818] focus:outline-none transition-colors" />
              </div>
              <div>
                <label class="block text-xs font-semibold uppercase tracking-[0.16em] text-[#9f978a] mb-2" for="email">Email Address *</label>
                <input id="email" name="email" type="email" required placeholder="e.g. john@email.com"
                  class="w-full rounded-xl border border-white/10 bg-[#141414] px-4 py-3.5 text-sm text-[#d3c8b8] placeholder-[#555] focus:border-[#ff5b36] focus:bg-[#181818] focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-[0.16em] text-[#9f978a] mb-2" for="message">Your Message *</label>
              <textarea id="message" name="message" rows="6" required placeholder="Tell me about your project or idea..."
                class="w-full resize-none rounded-xl border border-white/10 bg-[#141414] px-4 py-3.5 text-sm text-[#d3c8b8] placeholder-[#555] focus:border-[#ff5b36] focus:bg-[#181818] focus:outline-none transition-colors"></textarea>
            </div>
            <div id="form-status" class="hidden rounded-xl p-4 text-sm font-medium"></div>
            <button type="submit"
              class="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#ff5b36] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#ff7352] transition-all">
              <span>Send Message</span>
              <i class="h-4 w-4" data-lucide="send"></i>
            </button>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

## Lesson 10: Footer

### ✏️ Replace the `<footer>` placeholder with:

```html
<footer class="border-t border-white/[0.06] bg-[#090909] px-6 py-16 md:px-10">
  <div class="mx-auto max-w-7xl">
    <div class="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
      <div>
        <p class="text-2xl font-bold uppercase tracking-tight text-[#d3c8b8]">[STUDENT NAME]</p>
        <p class="mt-1 text-sm text-[#7d766c]">Web Developer — [YOUR CITY]</p>
      </div>
      <div class="flex items-center gap-5 text-[#5a5248]">
        <a href="https://github.com/[YOUR GITHUB]" target="_blank" class="hover:text-[#ff5b36] transition-colors" aria-label="GitHub">
          <i class="h-5 w-5" data-lucide="github"></i>
        </a>
        <a href="mailto:[YOUR EMAIL]" class="hover:text-[#ff5b36] transition-colors" aria-label="Email">
          <i class="h-5 w-5" data-lucide="mail"></i>
        </a>
        <a href="https://linkedin.com/in/[YOUR LINKEDIN]" target="_blank" class="hover:text-[#ff5b36] transition-colors" aria-label="LinkedIn">
          <i class="h-5 w-5" data-lucide="linkedin"></i>
        </a>
      </div>
    </div>
    <div class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-[#666] sm:flex-row">
      <p>© 2026 [STUDENT NAME]. All rights reserved.</p>
      <a href="#home" class="text-[#ff5b36] hover:underline">Back to Top ↑</a>
    </div>
  </div>
</footer>
```

---

## Lesson 11: JS — Navigation

> **What is JavaScript?**
> A programming language that makes the page interactive.
> Instead of just showing content, JS lets the page respond to clicks, scrolls, and typing.

### Key concepts

| Concept | What it does | Example |
|---------|-------------|---------|
| `const` | Stores a value that won't change | `const btn = document.getElementById("btn")` |
| `function` | A reusable block of code | `function sayHi() { alert("Hi!") }` |
| `getElementById` | Finds one element by id | `document.getElementById("modal")` |
| `querySelectorAll` | Finds all matching elements | `document.querySelectorAll(".nav-link")` |
| `addEventListener` | Listens for an event | `btn.addEventListener("click", myFn)` |
| `classList.add/remove` | Adds or removes a CSS class | `el.classList.add("hidden")` |
| `style.transform` | Changes a CSS transform directly | `el.style.transform = "translateX(0)"` |

### ✏️ Open `js/navigation.js` and fill in the TODOs:

```javascript
// Open: slide drawer in
function openMenu() {
  drawer.style.transform  = "translateX(0)";
  drawer.setAttribute("aria-hidden", "false");
  backdrop.classList.remove("hidden");
  menuBtn.setAttribute("aria-expanded", "true");
  iconOpen.classList.add("hidden");
  iconClose.classList.remove("hidden");
  document.body.style.overflow = "hidden";   // stop page scrolling
}

// Close: slide drawer out
function closeMenu() {
  drawer.style.transform  = "translateX(100%)";
  drawer.setAttribute("aria-hidden", "true");
  backdrop.classList.add("hidden");
  menuBtn.setAttribute("aria-expanded", "false");
  iconOpen.classList.remove("hidden");
  iconClose.classList.add("hidden");
  document.body.style.overflow = "";         // re-enable page scrolling
}

// Attach events
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Scroll Spy
function updateActiveLink() {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}
```

Then in `js/main.js`, uncomment the import and the call:
```javascript
import { initNavigation } from "./navigation.js";
// inside bootstrap():
initNavigation();
```

---

## Lesson 12: JS — Blogs

### ✏️ Open `js/blogs.js` and:

**Step 1 — Add your blog post data:**
```javascript
const blogPosts = {
  "blog-1": {
    title: "What I Learned in My First Month of Coding",
    category: "Beginner Journey",
    date: "Sep 2026",
    readTime: "5 min read",
    content: `
      <p>When I first opened a code editor, I didn't know what I was looking at...</p>
      <p>After four weeks, here are my top takeaways:</p>
      <ul style="list-style:none;padding:0">
        <li>✓ HTML is just organised text with labels</li>
        <li>✓ CSS is like painting — you describe how things look</li>
        <li>✓ JavaScript makes pages respond to you</li>
      </ul>
    `,
  },
  "blog-2": {
    title: "My Favourite CSS Tricks So Far",
    category: "CSS",
    date: "Sep 2026",
    readTime: "4 min read",
    content: `<p>Here are the CSS properties that surprised me the most...</p>`,
  },
};
```

**Step 2 — Implement `openBlogModal`:**
```javascript
window.openBlogModal = function(postId) {
  const post  = blogPosts[postId];
  const modal = document.getElementById("blog-modal");
  if (!post || !modal) return;

  document.getElementById("modal-title").textContent    = post.title;
  document.getElementById("modal-category").textContent = post.category;
  document.getElementById("modal-meta").textContent     = post.date + " · " + post.readTime;
  document.getElementById("modal-content").innerHTML    = post.content;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};
```

**Step 3 — Implement `closeBlogModal`:**
```javascript
window.closeBlogModal = function() {
  const modal = document.getElementById("blog-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
};
```

---

## Lesson 13: JS — Contact Form

### ✏️ Open `js/contact.js` and fill in the TODOs:

```javascript
function handleContactSubmit(event) {
  event.preventDefault();  // stop the page reloading

  const name    = document.getElementById("name")?.value.trim();
  const email   = document.getElementById("email")?.value.trim();
  const message = document.getElementById("message")?.value.trim();
  const status  = document.getElementById("form-status");

  // Validation — check all fields are filled
  if (!name || !email || !message) {
    status.textContent = "⚠ Please fill in all fields before sending.";
    status.className = "rounded-xl p-4 text-sm font-medium bg-red-500/10 border border-red-500/30 text-red-400";
    status.classList.remove("hidden");
    return;
  }

  // Success message (in a real project this would POST to a server)
  status.textContent = "✓ Message sent! I will get back to you soon.";
  status.className = "rounded-xl p-4 text-sm font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400";
  status.classList.remove("hidden");
  event.target.reset();  // clear all form fields
}
```

---

## Lesson 14: JS — Animations

The `js/animations.js` file is **already complete**.
It watches elements with the class `observe-line` and animates them into view when they scroll into the visible area.

To use it, add a divider line between sections:
```html
<div class="px-6 md:px-10">
  <div class="section-line observe-line"></div>
</div>
```

Make sure `initAnimations()` is uncommented in `js/main.js`.

---

## ✅ Final Checklist — Before You Publish

- [ ] Replace **every** `[STUDENT NAME]` with the real name
- [ ] Replace `[YOUR EMAIL]` with a real email address
- [ ] Replace `[YOUR GITHUB]` with the GitHub username
- [ ] Replace `[YOUR LINKEDIN]` with the LinkedIn profile slug
- [ ] Replace `[YOUR CITY]` and `[YOUR COUNTRY]` with real location
- [ ] Replace `[YOUR PHONE]` with a real phone number
- [ ] Put the student's photo in `assets/hero.jpg`
- [ ] Write at least **3 real project descriptions**
- [ ] Write at least **2 blog posts** about what you have learned
- [ ] Uncomment all imports in `js/main.js` and call all init functions
- [ ] Test on mobile: Chrome → F12 → Toggle Device Toolbar (Ctrl+Shift+M)
- [ ] Share the link with a friend and ask for feedback 🎉

---

## 📖 Quick Reference — HTML Tags

| Tag | What it does |
|-----|-------------|
| `<h1>` – `<h6>` | Headings (h1 = biggest) |
| `<p>` | Paragraph |
| `<a href="...">` | Clickable link |
| `<img src="..." alt="...">` | Image |
| `<div>` | Generic block container |
| `<span>` | Generic inline container |
| `<section>` | Thematic section of the page |
| `<header>` | Top part of page |
| `<footer>` | Bottom part of page |
| `<nav>` | Navigation links |
| `<button>` | Clickable button |
| `<form>` | Form wrapper |
| `<input>` | One-line text field |
| `<textarea>` | Multi-line text field |
| `<ul>` / `<li>` | List / list item |
| `<br>` | Line break |
| `<strong>` | Bold text |
| `<em>` | Italic text |

---

## 📖 Quick Reference — Tailwind Classes Used

| Class | Effect |
|-------|--------|
| `fixed` | Stays in place when you scroll |
| `flex` | Flexbox layout |
| `grid` | CSS Grid layout |
| `hidden` | `display: none` |
| `md:flex` | Flex on screens ≥ 768px |
| `text-white` | White text |
| `font-bold` | Bold weight |
| `uppercase` | ALL CAPS |
| `rounded-xl` | Rounded corners |
| `border` | 1px border |
| `p-6` | Padding 1.5rem all sides |
| `px-6` / `py-4` | Horizontal / vertical padding |
| `gap-4` | Space between flex/grid children |
| `hover:text-[#ff5b36]` | Orange colour on hover |
| `transition-colors` | Smooth colour change |
| `group` | Parent element for group-hover |
| `group-hover:text-white` | White text when parent is hovered |

---

*Happy building! Every expert was once a complete beginner. 🚀*
