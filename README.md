# Mira Pry — portfolio site

Personal portfolio site for Mira Pry, built with Create React App and React Router 7.

## Layout

```
src/                      React components and stylesheets
public/
  MiraScreaming.png               home page illustration
  stickers/                       clickable home-page stickers
  photo-blog/                     /photos gallery   — name_location_date.jpg, sorted newest first
  face-drawings/                  /drawings gallery
  art/                            /mixedmedia gallery
  photoshoot-portfolio/           /book-photoshoot slideshow
  other-assets/                   resume PDF, posters, gated paper, /hopes-for-technology slides
  manifest.json, robots.txt, sitemap.xml, favicon.ico
.env.local                REACT_APP_RESEARCH_PAPER_PASSWORD (gates /cibsr-paper; baked in at build time)
```

## Routes

`/`, `/engineering`, `/research`, `/advocacy`, `/thoughts`, `/art`, `/ballgame`, `/photos`, `/drawings`,
`/mixedmedia`, `/articles`, `/questions`, `/books`, `/travel`, `/resume`, `/mchri`, `/press`,
`/book-photoshoot`, `/cibsr-paper`, `/hopes-for-technology`, `/chatgpt-26`,
`/what-we-miss` (redirects to `/hopes-for-technology`), and a catch-all 404.

## Run

```
npm install
cp .env.local.example .env.local   # then set the password
npm start            # dev server
npm run build        # production build -> build/
npx serve -s build   # serve the build with SPA fallback
```

`/book-photoshoot` loads the Calendly inline widget from assets.calendly.com at runtime; everything
else is fully local.
