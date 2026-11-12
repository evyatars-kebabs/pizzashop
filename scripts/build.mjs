// Builds the single-file game (game.bundle.js) and stamps its hash into index.html so
// browsers never mix a cached old copy with a new one. Run with: npm run build
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

await build({
  entryPoints: ['src/entry.bundle.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  alias: { three: './vendor/three.module.js' },
  define: { 'import.meta.env': 'undefined' },
  outfile: 'game.bundle.js',
  logLevel: 'info',
});

const hash = createHash('md5').update(readFileSync('game.bundle.js')).digest('hex').slice(0, 8);
const html = readFileSync('index.html', 'utf8').replace(/game\.bundle\.js\?v=[^"]*/, `game.bundle.js?v=${hash}`);
writeFileSync('index.html', html);
console.log(`index.html -> game.bundle.js?v=${hash}`);
