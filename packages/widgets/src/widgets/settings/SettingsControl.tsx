import React from "react";
import Typography from '@mui/material/Typography';
// import { useDispatch } from "react-redux";
// import Button from '@mui/material/Button';
// import { selectSettings, settingsActions } from './SettingsRedux';

const SettingsControl: React.FC = () => {
//  const settings = selectSettings();
//  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Settings Control
      </Typography>
{/*
      <div>
        <Button 
          variant="outlined"
          color="primary"
          onClick={() => dispatch(settingsActions.execute.started())}
          >
            Execute
        </Button>
        <Button 
          variant="outlined"
          color="secondary"
          onClick={() => dispatch(settingsActions.outputs.started(0))}
          >
            Reset Outputs
        </Button>
      </div>
      <Typography variant="subtitle1" gutterBottom>
        Settings: {settings.outputs}
      </Typography>
*/}
    </>
  );
}

export default SettingsControl;
