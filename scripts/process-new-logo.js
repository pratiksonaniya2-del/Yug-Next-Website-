const sharp = require('sharp');
const fs = require('fs');

const srcPath = 'C:/Users/prati/.gemini/antigravity/brain/1ab6cb6e-9223-444d-938b-bdcb0bff446a/.user_uploaded/media_1793774165128_bc25c5d1.jpg';

async function processLogo() {
  const image = sharp(srcPath);
  const metadata = await image.metadata();
  console.log('Original dimensions:', metadata.width, metadata.height);

  const w = metadata.width;
  const h = metadata.height;
  const r = 24;

  const roundedMask = Buffer.from(
    `<svg width="${w}" height="${h}"><rect x="0" y="0" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="#fff"/></svg>`
  );

  // 1. Raw original png
  await sharp(srcPath).png().toFile('public/images/yugnext-logo.png');
  await sharp(srcPath).png().toFile('public/yugnext-logo.png');

  // 2. Rounded corner version
  await sharp(srcPath)
    .composite([{ input: roundedMask, blend: 'dest-in' }])
    .png()
    .toFile('public/images/yugnext-logo-rounded.png');
  await sharp(srcPath)
    .composite([{ input: roundedMask, blend: 'dest-in' }])
    .png()
    .toFile('public/yugnext-logo-rounded.png');

  // 3. Icon crop (extract the square emblem on the left)
  // The emblem height is h, so extract from x: 0, y: 0, width: h, height: h or bounding box
  // Let's create an icon with rounded corners
  const iconSize = h;
  const iconMask = Buffer.from(
    `<svg width="${iconSize}" height="${iconSize}"><rect x="0" y="0" width="${iconSize}" height="${iconSize}" rx="${Math.round(iconSize * 0.22)}" ry="${Math.round(iconSize * 0.22)}" fill="#fff"/></svg>`
  );

  // Find emblem left-most box
  await sharp(srcPath)
    .extract({ left: 15, top: 15, width: h - 30, height: h - 30 })
    .png()
    .toFile('public/images/yugnext-icon.png');

  console.log('Successfully generated all logo formats!');
}

processLogo().catch(console.error);
