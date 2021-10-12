import React from 'react';
import BrowserOnly from '@docusaurus/core/lib/client/exports/BrowserOnly';

const JupyterCell = (props: any) => {
  return (
      <BrowserOnly
        fallback={<div>Jupyter fallback content for prerendering</div>}>
        {() => {
          const { Jupyter } = require('@datalayer/jupyter-widgets');
          const { Notebook } = require('@datalayer/jupyter-widgets');
          return <Jupyter 
              jupyterToken={props.jupyterToken}
              jupyterServerHttpUrl={props.jupyterServerHttpUrl}
              jupyterServerWsUrl={props.jupyterServerWsUrl}
              collaborative={false} 
              terminals={true}>
                <Notebook path='ping.ipynb' />
            </Jupyter>
        }}
      </BrowserOnly>
  );
}

export default JupyterCell;
