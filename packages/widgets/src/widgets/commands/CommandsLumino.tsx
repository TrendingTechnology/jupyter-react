import CommandAdapter from './CommandsAdapter';
import LuminoAttached from '../../lumino/LuminoAttached';

import '@lumino/default-theme/style/index.css';

import './CommandsLumino.css';

const CommandLumino = () => {
  const commandLumino = new CommandAdapter();
  return <LuminoAttached>{commandLumino.panel}</LuminoAttached>
}

export default CommandLumino;
