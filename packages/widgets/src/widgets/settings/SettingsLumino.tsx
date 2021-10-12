import Typography from '@mui/material/Typography';
import SettingsAdapter from './SettingsAdapter';
import LuminoAttached from '../../lumino/LuminoAttached';

import '@jupyterlab/theme-light-extension/style/theme.css';
import '@jupyterlab/theme-light-extension/style/variables.css';

import './SettingsLumino.css';

const SettingsLumino = () => {
  const settingsLumino = new SettingsAdapter();
  return <>
    <Typography variant="h5" gutterBottom>
    </Typography>
    <LuminoAttached>{settingsLumino.panel}</LuminoAttached>
  </>
}

export default SettingsLumino;
