import { render } from 'react-dom';
import Example from './notebook/Example';

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <Example/>
  ,
  div
);
