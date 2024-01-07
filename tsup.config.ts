import { defineConfig } from 'tsup';

export default defineConfig({
  skipNodeModulesBundle: true,
  format: 'esm',
  entry: ['src'],
  target: 'esnext',
  outDir: './dist',
  minify: true,
  clean: true,
  shims: true,
  dts: false
});
