import FileBrowserAdapter from './FileBrowserAdapter';
import LuminoAttached from '../../lumino/LuminoAttached';

import '@jupyterlab/codemirror/style/index.css';
import '@jupyterlab/filebrowser/style/index.css';
import '@jupyterlab/theme-light-extension/style/theme.css';
import '@jupyterlab/theme-light-extension/style/variables.css';

import './FileBrowserLumino.css';

const FileBrowserLumino = () => {
  const fileBrowserLumino = new FileBrowserAdapter();
  return <LuminoAttached>{fileBrowserLumino.panel}</LuminoAttached>
}

export default FileBrowserLumino;
