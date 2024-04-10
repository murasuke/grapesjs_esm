import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';

export default {
  input: './src/editor_simple.js',
  output: {
    // esmodule
    file: './dist_simple/bundle_simple.js',
    format: 'esm',
    // sourcemap: true,
  },

  plugins: [
    del({ targets: 'dist_simple/*' }),
    css({ output: 'bundle_simple.css' }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
  ],
};
