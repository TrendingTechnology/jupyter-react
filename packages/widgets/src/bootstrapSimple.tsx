import { useEffect } from 'react';
import { render } from 'react-dom';
import Jupyter from './context/Jupyter';
import CellLumino from './widgets/cell/CellLumino';

/**
 * A simple example for the Jupyter React Widgets.
 */
const Example = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
    <CellLumino />
  </>
}

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <Jupyter
    collaborative={false}
    terminals={false}
  >
    <Example/>
  </Jupyter>
  ,
  div
);
