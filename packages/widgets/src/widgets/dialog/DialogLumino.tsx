import { useState, useEffect } from 'react';
import LuminoDetached from '../../lumino/LuminoDetached';
import DialogAdapter from './DialogAdapter';

import '@jupyterlab/apputils/style/index.css';
import '@jupyterlab/theme-light-extension/style/theme.css';
import '@jupyterlab/theme-light-extension/style/variables.css';
 
import './DialogLumino.css';

const DialogLumino = () => {
  const [dialogLumino, _] = useState(new DialogAdapter());
  useEffect(() => {
    dialogLumino.dialog.launch().then(success => success)
  }, []);
  return <LuminoDetached>{dialogLumino.dialog}</LuminoDetached>
}

export default DialogLumino;
