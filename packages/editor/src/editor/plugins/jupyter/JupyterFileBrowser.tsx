import { FileBrowser } from '@datalayer/jupyter-widgets';
import { RenderJupyterProps } from "../../elements/Element";

const JupyterFileBrowser = ({attributes, children, element}: RenderJupyterProps) => {
  return (
    <div {...attributes}>
      <FileBrowser/>
      {children}
    </div>
  )   
}

export default JupyterFileBrowser;
