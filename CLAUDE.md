# The Dr. Lawyer Law Group website rebuild

Rebuilding the website for The Dr. Lawyer Law Group, an Arizona personal injury and medical malpractice firm led by Dr. Zaheer Shah, who is both a medical doctor and a lawyer. The new site should look and feel like the Clifford Law Offices and Hastings Law Firm reference pages.

## Current phase: layout only

- Build the visual layout. Nothing needs to work behind the scenes yet.
- The contact form is visual only. Don't add form handling, PHP or any backend code.
- Build one section at a time. Stop after each section and wait for approval before starting the next one.
- Only change what the current request asks for. Leave finished sections alone.

## Stack

- Plain HTML, CSS and vanilla JavaScript.
- No React, Vue, Tailwind, Bootstrap, jQuery, npm, build tools or CSS preprocessors.
- No external JS libraries. Write carousels and the mobile menu by hand. Use `<details>` for FAQ accordions.
- Google Fonts is the only allowed external resource.
- One stylesheet (`css/style.css`) and one script (`js/main.js`) shared by every page.
- Hosting is GoDaddy cPanel. The site gets uploaded as static files, so all links and asset paths must be relative.

## Files

- All pages live in the project root: `index.html`, `personal-injury.html`, `medical-malpractice.html`, `car-accidents.html`, `workers-compensation.html`, `wrongful-death.html`, `failure-to-diagnose.html`, `resources.html`, `contact.html`.
- Don't create a page until it's requested.
- `/images` holds the real site assets.
- `/reference` holds screenshots of the design references and the current site. Never link to anything in `/reference` from the site.

## Header and footer

- The header and footer are copied into every page and must stay identical everywhere.
- Finish them on `index.html` first. When either one changes later, update every page in the same step.
- Keep all header markup inside `<header>` and all footer markup inside `<footer>` so they can move into PHP includes later.

## Design

- Layout references: the Clifford Law Offices and Hastings Law Firm screenshots in `/reference`. Match their structure, spacing and polish.
- Content reference: the current Dr. Lawyer screenshot in `/reference`. Use it for text and assets, not layout.
- Colors: use the navy and red from the logo in `/images`. Define every color and font once as CSS custom properties in `:root`.
- Type: a serif for headings and a clean sans-serif for body text, like both references.
- The phone number (602) 680-7300 appears in the header on every page as a `tel:` link.
- Mobile-first. Check every layout at 375px, 768px and 1280px.
- Button text says what happens, like "Call (602) 680-7300" or "Schedule a free case strategy session".
- Avoid fade-in or slide-up animations on every section, identical cards with the same drop shadow everywhere, and arrows tacked onto button text.
- Keep visible keyboard focus styles and respect `prefers-reduced-motion`.

## Content rules

- Use the text from the current site. Don't write new marketing claims.
- Never invent case results, dollar amounts, awards, reviews, ratings, years of experience, media appearances or attorney credentials. If a section needs one the current site doesn't have, use an obvious placeholder like `[VERDICT AMOUNT]`.
- Don't copy text, photos or logos from the Clifford or Hastings sites. They're layout references only.

## Code style

- No comments in HTML, CSS or JS files.
- Plain, readable class and variable names. Nothing clever or abbreviated.
- Semantic HTML: one `<h1>` per page, real `<button>` and `<a>` elements, `alt` text on every image, a `<label>` for every form field.
- In CSS, put layout properties first in each rule (display, flex and grid properties, justify-content, align-items, gap), then a blank line, then everything else:

```css
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  padding: 4rem 1.5rem;
  background-color: var(--navy);
  color: var(--white);
}
```
