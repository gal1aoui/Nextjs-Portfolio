# Project images

Per-project visual assets consumed by `components/projects/data` (the
`images` field on each project definition) and rendered by
`components/projects/project-cover.tsx`.

Convention — one folder per project id:

```
public/projects/<project-id>/
  cover.webp      1280px wide (16:9) — card/drawer/gallery cover (auto-detected)
  logo.webp       square logo, optional
  screen-1.webp   additional screenshots, optional
```

Drop a screenshot into the folder (any of image.png / image.jpg / cover.png /
cover.jpg) and run `npm run covers:optimize` — it converts to an optimized
1280px `cover.webp` and deletes the source. ProjectCover picks up
`cover.webp` by convention, so no code change is needed. To use a different
filename, set it explicitly on the project's definition in
`components/projects/data/definitions.ts`:

```ts
images: { cover: "/projects/menumate/screenshot.avif" },
```

Until a project has a cover, the UI renders a gradient placeholder — nothing
breaks with an empty folder, and a listed-but-missing file falls back to the
placeholder at runtime too.
