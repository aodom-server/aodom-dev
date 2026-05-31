# aodom.dev Resume Site

Static resume site served from `odom-hp` by Caddy.

## Local path on server

```text
/srv/docker/sites/aodom-dev
```

Caddy serves:

```text
/srv/docker/sites/aodom-dev/site
```

## Edit

```bash
cd /srv/docker/sites/aodom-dev
nano site/index.html
```

Changes are live after saving because Caddy serves the static files directly.

## Git

```bash
git status
git add .
git commit -m "Update resume site"
```
