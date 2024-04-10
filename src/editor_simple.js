import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-newsletter';

var editor = grapesjs.init({
  container: '#gjs',
  plugins: [plugin],
});

export default editor;
