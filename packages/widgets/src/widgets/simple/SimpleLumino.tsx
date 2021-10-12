import LuminoAttached from '../../lumino/LuminoAttached';
import SimpleAdapter from './SimpleAdapter';

import '@lumino/default-theme/style/index.css';

import './SimpleLumino.css'

const SimpleLumino = () => {
    const simpleLumino = new SimpleAdapter();
    return <LuminoAttached>{simpleLumino.panel}</LuminoAttached>
  }
  
export default SimpleLumino;
