# 📅 10-Week Web Dev Curriculum
### HTML → CSS → JavaScript → React
**5 hours/week · 50 hours total · 1 student portfolio as the project thread**

---

## The Big Picture

| Round | Weeks | Focus | Hours |
|-------|-------|-------|-------|
| **1 — HTML** | 1 – 2 | Structure, all tags & attributes | 10 hrs |
| **2 — CSS** | 3 – 6 | Plain CSS → Tailwind → Responsive | 20 hrs |
| **3 — JavaScript** | 7 – 9 | DOM, events, ES Modules | 15 hrs |
| **React Intro** | 10 | Components, JSX, state basics | 5 hrs |

> **One project thread the whole way through:**
> The student's personal portfolio site. Every lesson adds to it.
> By week 9 it's fully functional. Week 10 they see how React would change how it's built.

---

## Week 1 — HTML: The Skeleton (5 hrs)

**Goal:** Student can write a complete HTML page from scratch.

| Session | Time | Topic | What they build |
|---------|------|-------|----------------|
| 1 | 1.5 hr | How the web works · browser · editor setup · `<!DOCTYPE html>` structure | A "Hello World" page |
| 2 | 1.5 hr | Text tags: `h1–h6` `p` `strong` `em` `br` · `a` · `img` + `alt` attribute | Navbar + Hero text |
| 3 | 2 hr | `section` `header` `footer` `nav` `main` · `id` attribute · anchor links (`href="#about"`) | Full page skeleton — all 8 sections |

**HTML attributes covered this week:**
`lang` `charset` `name` `content` `href` `src` `alt` `id` `target`

**End of week checkpoint:**
> Open `index.html` in a browser. Every section exists. Page scrolls and anchor links jump correctly. No styling — that's fine.

---

## Week 2 — HTML: Forms, Lists & Every Attribute (5 hrs)

**Goal:** Student understands every attribute type. No more HTML mysteries.

| Session | Time | Topic | What they build |
|---------|------|-------|----------------|
| 1 | 1.5 hr | Lists: `ul` `ol` `li` · Description lists `dl` `dt` `dd` | Project feature lists, skill chips |
| 2 | 2 hr | Forms: `form` `input` (all types) `textarea` `select` `option` `label` `button` · `for` + `id` pairing | Full contact form |
| 3 | 1.5 hr | `class` attribute · semantic grouping · `div` vs `span` · `data-*` attributes · `aria-label` | Tidy up all sections, add all class/id hooks |

**HTML attributes covered this week:**
`class` `type` `placeholder` `required` `rows` `for` `action` `method` `disabled` `aria-label` `aria-expanded` `aria-hidden` `data-lucide`

**End of week checkpoint:**
> Every section of the portfolio is in the HTML. All form fields work (though unstyled). Validate at [validator.w3.org](https://validator.w3.org).

---

## Week 3 — CSS: Box Model & Styling Foundations (5 hrs)

**Goal:** Student can style any element. Understands how CSS works.

| Session | Time | Topic | What they style |
|---------|------|-------|----------------|
| 1 | 1.5 hr | How CSS works · linking the file · selectors (element, `.class`, `#id`) · the cascade | Body background, font, base text colour |
| 2 | 2 hr | Box model: `margin` `padding` `border` `width` `height` · `box-sizing: border-box` · `display: block/inline` | Navbar layout |
| 3 | 1.5 hr | Colors (hex, rgba) · `font-family` `font-size` `font-weight` · `text-align` · `text-transform` · `letter-spacing` · CSS variables `--var` | Hero section heading + text |

**CSS properties covered this week:**
`background` `color` `font-*` `text-*` `margin` `padding` `border` `width` `height` `display` `box-sizing` `position: fixed` `top/left/right` `z-index`

**End of week checkpoint:**
> Navbar is fixed at the top and looks clean. Hero heading is big and styled. Page has a dark background and correct fonts.

---

## Week 4 — CSS: Layout — Flexbox & Grid (5 hrs)

**Goal:** Student can lay out anything on a page with Flexbox.

| Session | Time | Topic | What they style |
|---------|------|-------|----------------|
| 1 | 2 hr | Flexbox: `display: flex` · `justify-content` · `align-items` · `flex-direction` · `gap` · `flex-wrap` | Navbar items aligned, Hero two-column layout |
| 2 | 1.5 hr | CSS Grid: `display: grid` · `grid-template-columns` · `gap` · `grid-column: span N` | About stats row, Projects grid |
| 3 | 1.5 hr | `position: relative/absolute/sticky` · `overflow: hidden` · `cursor` | Sticky project cards effect, image overlay |

**CSS properties covered this week:**
`display: flex/grid` `justify-content` `align-items` `flex-wrap` `gap` `grid-template-columns` `grid-column` `position` `top/bottom/left/right` `overflow` `z-index`

**End of week checkpoint:**
> About + Projects sections are laid out correctly. Navbar links are spaced. No responsiveness yet — that comes in week 6.

---

## Week 5 — CSS: Transitions, Animations & Tailwind Intro (5 hrs)

**Goal:** Student adds life to the page, then discovers Tailwind.

| Session | Time | Topic | What they style |
|---------|------|-------|----------------|
| 1 | 1.5 hr | `transition` · `transform` (scale, translate, rotate) · `opacity` · `hover` pseudo-class | Hover effects on buttons, cards, nav links |
| 2 | 1.5 hr | `@keyframes` · `animation` · `animation-delay` | Hero word wipe-up animation, marquee scroll |
| 3 | 2 hr | **Why Tailwind?** · Install via CDN · utility class concept · convert the Blogs + Contact sections using Tailwind | Blogs bento grid, Contact cards styled |

**Key moment — show the before/after:**
Write `.btn { background: #ff5b36; border-radius: 9999px; padding: 1rem 2rem; }` then show the equivalent `bg-[#ff5b36] rounded-full px-8 py-4` in Tailwind. Let the student decide which they prefer for rapid building.

**CSS / Tailwind covered:**
`transition` `transform` `opacity` `@keyframes` `animation` · Tailwind: `bg-` `text-` `rounded-` `border` `p-` `gap-` `flex` `grid` `hover:` `group` `group-hover:`

**End of week checkpoint:**
> Buttons animate on hover. Hero words wipe in on load. Blogs and Contact are styled with Tailwind.

---

## Week 6 — CSS: Lucide Icons + Responsiveness (5 hrs)

**Goal:** Site looks great on every screen size. Student can use icon libraries.

| Session | Time | Topic | What they add |
|---------|------|-------|--------------|
| 1 | 1 hr | **Lucide Icons** — what icon libraries are · `data-lucide` attribute · `lucide.createIcons()` call | Icons in navbar, buttons, contact cards |
| 2 | 2 hr | Responsive design concept · mobile-first · **plain CSS media queries** `@media (min-width: 768px)` · test with DevTools | Responsive navbar, hero stacks on mobile |
| 3 | 2 hr | **Tailwind responsive prefixes** `sm:` `md:` `lg:` · `hidden md:flex` · `grid-cols-1 md:grid-cols-12` · mobile drawer HTML | Full site responsive — test on phone |

**End of week checkpoint:**
> Entire portfolio looks correct on mobile (375px), tablet (768px), and desktop (1280px).
> Mobile hamburger button is in the HTML ready for JS next round.

---

## Week 7 — JavaScript: The Language (5 hrs)

**Goal:** Student understands what JS is and can write basic programs.

| Session | Time | Topic | What they write |
|---------|------|-------|----------------|
| 1 | 1.5 hr | What JS does · `<script>` tag · `console.log` · variables: `const` `let` · data types: string, number, boolean | Small console experiments |
| 2 | 2 hr | Functions · `if / else` · comparison operators · `addEventListener` · `getElementById` | Alert on button click · toggle a class |
| 3 | 1.5 hr | Arrays · `forEach` loop · objects `{ key: value }` · `querySelector` · `querySelectorAll` | Loop over nav links and log them |

**JS concepts covered:**
`const` `let` `function` `if/else` `===` `!` `&&` `||` `[]` `{}` `forEach` `document.getElementById` `querySelector` `querySelectorAll` `addEventListener`

**End of week checkpoint:**
> Student writes a small JS program (e.g. a simple to-do list or counter) from scratch without help.

---

## Week 8 — JavaScript: DOM Manipulation (5 hrs)

**Goal:** Student builds all the interactive features of the portfolio.

| Session | Time | Topic | What they build |
|---------|------|-------|----------------|
| 1 | 2 hr | `classList.add/remove/toggle` · `style.property` · `innerHTML` · `textContent` | Mobile nav drawer open/close + scroll spy |
| 2 | 1.5 hr | `event.preventDefault()` · form validation · showing/hiding elements | Contact form — validate + show success/error |
| 3 | 1.5 hr | `window.addEventListener("scroll")` · `element.offsetTop` · `IntersectionObserver` | Scroll-spy active link + scroll animations |

**JS concepts covered:**
`classList` `style` `innerHTML` `textContent` `event.preventDefault()` `window.scrollY` `offsetTop` `offsetHeight` `IntersectionObserver` `setTimeout`

**End of week checkpoint:**
> Mobile drawer opens/closes. Contact form validates. Active nav link highlights on scroll. Scroll animations fire.

---

## Week 9 — JavaScript: ES6 + Modules (5 hrs)

**Goal:** Student writes clean, modern, organised JS. Portfolio JS is refactored into modules.

| Session | Time | Topic | What they refactor |
|---------|------|-------|-------------------|
| 1 | 1.5 hr | Arrow functions `() => {}` · template literals `` `Hello ${name}` `` · destructuring `const { a } = obj` | Rewrite all callbacks as arrow functions |
| 2 | 2 hr | ES Modules: `export function` · `import { fn } from "./file.js"` · `type="module"` on script tag | Split into `navigation.js` `blogs.js` `contact.js` `animations.js` `main.js` |
| 3 | 1.5 hr | `fetch` API · Promises · `async/await` · intro to JSON | Fetch a free public API and display the data (e.g. GitHub user info) |

**JS concepts covered:**
Arrow functions · template literals · destructuring · spread `...` · `export` · `import` · `fetch` · `Promise` · `async/await` · `JSON.parse`

**End of week checkpoint:**
> Portfolio JS is fully modular. `main.js` imports and initialises everything. No JS errors in console. Blog modal works.

---

## Week 10 — React: Why & What Next (5 hrs)

**Goal:** Student understands why React exists and can read/write basic React code.

| Session | Time | Topic | What they build |
|---------|------|-------|----------------|
| 1 | 1.5 hr | Problem with plain JS at scale · What is a component? · JSX syntax · Create React App / Vite setup | "Hello World" React app |
| 2 | 2 hr | Functional components · `props` · rendering a list with `.map()` · conditional rendering | Convert the Hero section into a `<Hero />` component |
| 3 | 1.5 hr | `useState` hook · event handlers in React · lifting state up | A simple counter + a toggle button |

**Concepts covered:**
Components · JSX · `props` · `.map()` · `key` prop · `useState` · event handlers · `import/export` in React

**End of week checkpoint:**
> Student can create a React component, pass props to it, and use `useState` for basic interactivity.
> They understand the portfolio they built and what it would look like as a React app.

---

## ⏱ Time Budget Summary

| Week | Topic | Hours | Running Total |
|------|-------|-------|--------------|
| 1 | HTML: Structure & core tags | 5 | 5 |
| 2 | HTML: Forms, lists, all attributes | 5 | 10 |
| 3 | CSS: Selectors, box model, text | 5 | 15 |
| 4 | CSS: Flexbox & Grid | 5 | 20 |
| 5 | CSS: Animations + Tailwind intro | 5 | 25 |
| 6 | CSS: Lucide + Responsiveness | 5 | 30 |
| 7 | JS: Language basics | 5 | 35 |
| 8 | JS: DOM manipulation | 5 | 40 |
| 9 | JS: ES6 + Modules | 5 | 45 |
| 10 | React: Components + state | 5 | 50 |

---

## 🚦 Pacing Rules

1. **Never move on if the student can't build the section from memory.**
   Repeat the exercise before moving forward.

2. **20-minute rule:** If a concept takes more than 20 minutes to explain, it's too abstract — build something with it first, explain after.

3. **No copy-paste in weeks 1–4.** Student types every line. Typing builds muscle memory.

4. **From week 5 onward:** Tailwind classes can be referenced from docs — googling is a skill too.

5. **Buffer time:** Each week has roughly 30 minutes of buffer for questions, debugging, and review. Don't plan every minute.

---

## 📦 Starter Files Per Round

| Round | Folder | What's in it |
|-------|--------|-------------|
| HTML | `round-1/` | Bare `index.html` — no CSS, no classes yet |
| CSS | `round-2/` | `index.html` with class hooks · `css/style.css` (plain CSS starter for first 3 sections) |
| JS | `round-3/` | Complete HTML+Tailwind · `js/*.js` module shells with step comments |

---

## 🎯 Skills Checklist — Student Should Know After 10 Weeks

### HTML
- [ ] Write a valid HTML document from memory
- [ ] Use all semantic tags correctly
- [ ] Build and validate a form with all input types
- [ ] Explain what `id`, `class`, `href`, `src`, `alt`, `target`, `aria-*` do

### CSS
- [x] Explain the box model
- [ ] Centre anything with Flexbox
- [ ] Build a two-column layout with Grid
- [ ] Write a keyframe animation
- [ ] Use Tailwind utility classes confidently
- [ ] Make a page responsive without a library

### JavaScript
- [ ] Explain the difference between `const` and `let`
- [ ] Write and call a function
- [ ] Find and manipulate a DOM element
- [ ] Handle a form submit event
- [ ] Use `fetch` to get data from an API
- [ ] Split code into ES modules

### React
- [ ] Explain what a component is and why React uses them
- [ ] Create a functional component with props
- [ ] Use `useState` to track simple state
