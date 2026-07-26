/**
 * Optimizes project cover images: converts any image dropped into
 * public/projects/<id>/ (image.png, cover.png, cover.jpg, ...) into a
 * 1280px-wide cover.webp (q80) and removes the source file. Re-compresses an
 * oversized cover.webp in place. Uses the sharp that ships with Next — no
 * extra dependency.
 *
 * Usage: npm run covers:optimize
 */
import { readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const root = path.resolve("public/projects");
const MAX_WIDTH = 1280;
const SOURCE_NAMES = [
  "image.png",
  "image.jpg",
  "image.webp",
  "cover.png",
  "cover.jpg",
];

for (const entry of await readdir(root, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;

  const dir = path.join(root, entry.name);
  const target = path.join(dir, "cover.webp");

  const exists = (file) =>
    stat(file).then(
      () => true,
      () => false,
    );

  let source = null;

  for (const name of SOURCE_NAMES) {
    const candidate = path.join(dir, name);

    if (await exists(candidate)) {
      source = candidate;
      break;
    }
  }

  const hasTarget = await exists(target);

  if (!source && !hasTarget) continue;

  if (!source) {
    // Only cover.webp present: re-compress it if it looks unoptimized.
    const metadata = await sharp(target).metadata();
    const { size } = await stat(target);

    if ((metadata.width ?? 0) <= MAX_WIDTH && size < 250 * 1024) {
      console.log(`${entry.name}: already optimized, skipped`);
      continue;
    }
    source = target;
  }

  const { size: before } = await stat(source);
  const tmp = path.join(dir, "cover.tmp.webp");

  await sharp(source)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .webp({ quality: 80 })
    .toFile(tmp);

  if (source !== target) await unlink(source);
  if (hasTarget && source !== target) await unlink(target);
  await rename(tmp, target);

  const { size: after } = await stat(target);

  console.log(
    `${entry.name}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB webp`,
  );
}
console.log("Done.");
