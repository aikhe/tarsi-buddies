---
name: webp
description: Converts PNG/JPG assets to webp, wires them into components, and deletes the unused sources. Use when adding or replacing image assets.
---

# Webp Skill

This skill covers the full lifecycle of image assets: convert sources to webp, reference them in code, verify, then delete the orphaned originals.

## When to use this skill

- Use this when `src/lib/assets/` has new PNG/JPG images.
- Use this when swapping a component's images.
- Use this to clean up image files left orphaned by a swap.

## How to use it

### 1. Inspect the sources

- List the folder and record every image plus its dimensions.
- Dimensions are required for `width` / `height` attributes (they lock the layout and avoid CLS).
- On Windows without imaging tools, read dimensions via `System.Drawing`:
  `Add-Type -AssemblyName System.Drawing` then `New-Object System.Drawing.Bitmap($path)`.

### 2. Convert to webp

- No converter is installed in the repo, so use `sharp-cli` ephemerally (no `package.json` changes):
  `bunx -p sharp-cli sharp --input "<src>" --output "<dir>" --format webp`
- Keep webp files next to the sources (same folder, same basename, `.webp` extension).
- Spot-check output sizes; webp should be clearly smaller than the PNG.

### 3. Wire into the component

- In Vite, import webp assets directly:
  `import hero from '$lib/assets/hero.webp';` (or the relative path)
- Pass real `width` and `height` to `<img>` tags.
- Prefer `src/lib/assets/` for bundled images; use `public/` only for files that must keep a stable URL (favicon, robots.txt, share images).

### 4. Verify before deleting anything

- Run `bun run lint:js` to catch bad imports.
- Run `bun run build` — it fails on missing/unresolved imports, proving the wiring is correct.

### 5. Delete the unused originals

- Only after the build passes, search for references with ripgrep:
  `rg -n "<name>\.(webp|png)" src public`
- Delete the source PNGs/JPGs and any orphaned webp with zero references.
- Re-run the build after deletion as a final safety net.

## Troubleshooting

- `sharp-cli` needs network access on first use (downloads `sharp`); subsequent runs use the cache.
- If `rg` matches look wrong, quote the pattern and check for substring traps (e.g. `hero/1.webp` vs `hero.webp`) — always include the extension in the pattern.
