# aodom.dev Resume Site

My public resume site.

*It somewhat proves I can program...*

## Stack

This is an Astro static site. Source files live in `src/`, static assets live in `public/`, and the generated site is committed to `site/` because Caddy serves that directory directly on `odom-hp`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Astro writes the production output to `site/`.

## Server Path

```text
/srv/docker/sites/aodom-dev
```

Caddy serves:

```text
/srv/docker/sites/aodom-dev/site
```
