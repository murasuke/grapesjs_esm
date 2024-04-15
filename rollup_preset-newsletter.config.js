import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';

export default {
  input: './src/editor_preset-newsletter.js',
  output: {
    // esmodule
    file: './dist_preset-newsletter/bundle.js',
    format: 'esm',
    // sourcemap: true,
  },

  plugins: [
    del({ targets: 'dist_preset-newsletter/*' }),
    css({ output: 'bundle.css' }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
  ],
};
