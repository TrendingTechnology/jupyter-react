import { useEffect } from 'react';
import { useStore } from "react-redux";
import TerminalAdapter from './TerminalAdapter';
import LuminoAttached from '../../lumino/LuminoAttached';
import { terminalEpics, terminalReducer } from './TerminalRedux';

import '@jupyterlab/terminal/style/index.css';
import '@jupyterlab/theme-light-extension/style/theme.css';
import '@jupyterlab/theme-light-extension/style/variables.css';

import './TerminalLumino.css';

const TerminalLumino = () => {
  const terminalLumino = new TerminalAdapter();
  const injectableStore = useStore();
  useEffect(() => {
    (injectableStore as any).injectReducer('terminal', terminalReducer);
    (injectableStore as any).injectEpic(terminalEpics(terminalLumino));
  }, []); 
  return <LuminoAttached>{terminalLumino.panel}</LuminoAttached>
}

export default TerminalLumino;
