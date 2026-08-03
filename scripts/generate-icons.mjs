/**
 * Generates the browser and search-result icons from the canonical logo PNG.
 * Uses the sharp installation that ships with Next.js.
 *
 * Usage: npm run icons:generate
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import sharp from "sharp";

const publicDir = path.resolve("public");
const iconPath = path.join(publicDir, "icon.png");
const source = await readFile(iconPath);

const renderPng = (size) =>
  sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: "#ffffff",
      kernel: sharp.kernel.lanczos3,
    })
    .flatten({ background: "#ffffff" })
    .png({ compressionLevel: 9 })
    .toBuffer();

await writeFile(iconPath, await renderPng(512));
await writeFile(path.join(publicDir, "apple-icon.png"), await renderPng(180));

const faviconSizes = [16, 32, 48, 64, 96];
const faviconImages = await Promise.all(faviconSizes.map(renderPng));
const directorySize = 6 + faviconImages.length * 16;
const header = Buffer.alloc(directorySize);

header.writeUInt16LE(0, 0); // Reserved.
header.writeUInt16LE(1, 2); // ICO image type.
header.writeUInt16LE(faviconImages.length, 4);

let imageOffset = directorySize;

faviconImages.forEach((image, index) => {
  const size = faviconSizes[index];
  const entryOffset = 6 + index * 16;

  header.writeUInt8(size, entryOffset);
  header.writeUInt8(size, entryOffset + 1);
  header.writeUInt8(0, entryOffset + 2); // No palette.
  header.writeUInt8(0, entryOffset + 3);
  header.writeUInt16LE(1, entryOffset + 4); // Color planes.
  header.writeUInt16LE(32, entryOffset + 6); // Bits per pixel.
  header.writeUInt32LE(image.length, entryOffset + 8);
  header.writeUInt32LE(imageOffset, entryOffset + 12);

  imageOffset += image.length;
});

await writeFile(
  path.join(publicDir, "favicon.ico"),
  Buffer.concat([header, ...faviconImages]),
);

console.log("Generated icon.png, apple-icon.png and favicon.ico.");
