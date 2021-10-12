import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StopOutlined from '@mui/icons-material/StopOutlined';
import QuestionAnswerOutlined from '@mui/icons-material/QuestionAnswerOutlined';
import { notebookActions, selectNotebook } from './NotebookRedux';

const NotebookToolbar = () => {
  const dispatch = useDispatch();
  const notebook = selectNotebook();
  return (
    <>
      <Grid container spacing={3} style={{ padding: '30px 110px 0px 30px' }}>
        <Grid item xs={6}>
          <Grid container justifyItems="flex-start">
            <Button
              variant="text"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => dispatch(notebookActions.insertBelow.started())}
              >
                Text
            </Button>
            <Button
              variant="text"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => dispatch(notebookActions.insertBelow.started())}
              >
                Markdown
            </Button>
            <Button 
              variant="text"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => dispatch(notebookActions.insertBelow.started())}
              >
                Code
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justifyContent="flex-end">
            {(notebook.kernelStatus === 'idle') &&
              <Button 
                variant="outlined"
                color="primary"
                startIcon={<PlayCircleOutlineIcon />}
                onClick={() => dispatch(notebookActions.runAll.started())}
                >
                  Run all
              </Button>
             }
            {(notebook.kernelStatus === 'busy') &&
              <Button 
                variant="outlined"
                color="secondary"
                startIcon={<StopOutlined />}
                onClick={() => dispatch(notebookActions.interrupt.started())}
                >
                  Stop
              </Button>
             }
            {((notebook.kernelStatus !== 'idle') && (notebook.kernelStatus !== 'busy')) &&
              <Button 
                variant="outlined"
                color="primary"
                startIcon={<QuestionAnswerOutlined />}
                >
              </Button>
             }
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default NotebookToolbar;
