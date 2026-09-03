# BLUES LEGENDS — Website

A polished, responsive educational website for the fictional band Blues Legends.

## Files
- `index.html` — page structure and content
- `styles.css` — blue/white/black 80s/90s visual design
- `script.js` — English/Portuguese translation, mobile menu, animations and demo ticket reservation

## Important
The ticket form is a **front-end classroom/demo system**. It stores reservations only in the visitor's browser with `localStorage`. It does NOT send reservations to a shared database or email.

For a real public ticket system, connect the form to a backend/database or a form service.

## Free publishing + QR code
### Option A — GitHub Pages (free)
1. Create a GitHub account.
2. Create a new **public repository**, for example `blues-legends`.
3. Upload `index.html`, `styles.css` and `script.js`.
4. Open **Settings → Pages**.
5. Under the publishing/source option, choose the `main` branch and `/ (root)`.
6. GitHub will provide a public address similar to:
   `https://YOUR-USERNAME.github.io/blues-legends/`
7. Open that address on your phone to test it.

### Option B — Netlify (also free for a small static project)
1. Create a Netlify account.
2. Use the option to deploy a site from your project/repository.
3. Upload the three website files or connect the GitHub repository.
4. Netlify gives you a public `netlify.app` address.

### QR Code
After the website has a public URL:
1. Copy the complete website URL.
2. Open any reputable QR-code generator.
3. Paste the URL.
4. Generate the QR code.
5. Save/print the QR code on the poster for the event.

Do NOT make the QR code before you have the final public URL, because the QR code must point to that exact address.

## Suggested classroom structure
This project demonstrates:
- semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`)
- CSS variables, Grid, Flexbox, media queries and responsive design
- accessible `label` elements on form fields
- JavaScript DOM manipulation and events
- `localStorage`
- bilingual content switching
- smooth navigation and scroll animations
