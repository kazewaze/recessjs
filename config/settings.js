// This is the Default Theme for the code-editor in Recess.js if one is not provided.
import dracula from 'prism-react-renderer/themes/dracula';

// This is the Default Component to be rendered in the editor and preview if one is not provided.
import code from './code.js';

const settings = {
  code: code.Default,
  filename: 'App.js',
  dep: {},
  theme: dracula
};

export default settings;