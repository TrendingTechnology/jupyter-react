import { render } from 'react-dom';
import Paper from '@mui/material/Paper';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Jupyter, NotebookLumino } from '@datalayer/jupyter-widgets';
import Header from './Header';

const useStyles = makeStyles((theme: Theme) =>
  ({
    root: {
//      marginLeft: theme.spacing(16),
//      marginRight: theme.spacing(16),
      minWidth: '500px',
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
//        margin: theme.spacing(1),
//        width: theme.spacing(16),
      },
    },
  }),
);

export default function NotebookExample() {
  const classes = useStyles();
  return (
    <Jupyter collaborative={false} terminals={true}>
      <div className={classes.root}>
        <Paper elevation={3} style={{ width: '100%' }}>
          <Header />
          <NotebookLumino path='ping.ipynb' ipywidgets='modern' />
        </Paper>
      </div>
    </Jupyter>
  );
}

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <>
    <CssBaseline />
    <NotebookExample />
  </>
  ,
  div
);
