import { render } from 'react-dom';
import { Jupyter, NotebookLumino, NotebookControl } from '@datalayer/jupyter-widgets';
// import { JupyterUsers } from '@datalayer/jupyter-auth';

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <Jupyter collaborative={true} terminals={true}>
    <NotebookControl/>
{/*
    <JupyterUsers />
*/}
    <NotebookLumino path='ping.ipynb' ipywidgets="modern" />
  </Jupyter>
  ,
  div
);
