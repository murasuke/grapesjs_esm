import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';
import commonjs from '@rollup/plugin-commonjs';
import del from 'rollup-plugin-delete';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/editor.js',
  output: {
    // esmodule
    file: './dist/bundle.js',
    format: 'esm',
    // sourcemap: true,
  },

  plugins: [
    del({ targets: 'dist/*' }),
    css({ output: 'bundle.css' }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
  ],
};
