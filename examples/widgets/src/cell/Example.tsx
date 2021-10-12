import { render } from 'react-dom';
import { Jupyter, selectCell, CellLumino, CellControl } from '@datalayer/jupyter-widgets';

const CellPreview = () => {
  const cell = selectCell();
  return <>
    <div>source: {cell.source}</div>
    <div>kernel available: {String(cell.kernelAvailable)}</div>
  </>
}

export default function SimpleWidgetExample() {
  return (
    <Jupyter collaborative={false} terminals={true}>
      <CellPreview/>
      <CellControl />
      <CellLumino />
    </Jupyter>
  );
}

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <SimpleWidgetExample/>
  ,
  div
);
