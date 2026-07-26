# Project images

Per-project visual assets consumed by `components/projects/data` (the
`images` field on each project definition) and rendered by
`components/projects/project-cover.tsx`.

Convention — one folder per project id:

```
public/projects/<project-id>/
  cover.webp      1200x630 (16:9-ish) — card/drawer/gallery cover, doubles as a future OG image
  logo.webp       square logo, optional
  screen-1.webp   additional screenshots, optional
  screen-2.webp
```

To activate an image, drop the file here and set it on the project's
definition in `components/projects/data/definitions.ts`, e.g.:

```ts
images: { cover: "/projects/menumate/cover.webp" },
```

Until a project has a cover, the UI renders a gradient placeholder — nothing
breaks with an empty folder, and a listed-but-missing file falls back to the
placeholder at runtime too.
