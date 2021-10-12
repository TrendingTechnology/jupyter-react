import ConsoleAdapter from './ConsoleAdapter';
import LuminoAttached from '../../lumino/LuminoAttached';

import '@jupyterlab/console/style/index.css';
import '@jupyterlab/theme-light-extension/style/theme.css';
import '@jupyterlab/theme-light-extension/style/variables.css';

import './ConsoleLumino.css';

const ConsoleLumino = () => {
  const consoleLumino = new ConsoleAdapter();
  return <LuminoAttached>{consoleLumino.panel}</LuminoAttached>
}

export default ConsoleLumino;
