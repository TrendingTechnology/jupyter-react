import { useState, useEffect } from 'react';
import { OutputAreaModel } from '@jupyterlab/outputarea';
import OutputAdapter from './OutputAdapter';
import Kernel from '../../services/Kernel';
import CodeMirrorEditor from '../editor/CodeMirrorEditor';
import LuminoAttached from '../../lumino/LuminoAttached';

import '@lumino/default-theme/style/index.css';

import './OutputLumino.css';

export type IOutputProps = {
  kernel: Kernel;
  autoRun: boolean;
  showEditor: boolean;
  code: string;
  executeTrigger: number;
  clearTrigger: number;
}

const OutputLumino = (props: IOutputProps) => {
  const { autoRun, code, kernel, showEditor, executeTrigger, clearTrigger } = props;
  const [model, _] = useState(new OutputAreaModel({
    trusted: true,
    values: [
      {
        "output_type": "execute_result",
        "data": {
          "text/html": [
            "<h3>I am the default output...  👉  Run the cell to update me...  👀</h3>"
          ]
        },
        "execution_count": 0,
        "metadata": {},
      }
    ]
  }));
  const [outputAdapter,] = useState(new OutputAdapter(
    kernel.getJupyterKernel(),
    model,
    {},
  ));
  useEffect(() => {
    if (!showEditor && autoRun) {
      outputAdapter.execute(code);
    }
  }, []);
  useEffect(() => {
    outputAdapter.execute(code);
  }, [executeTrigger]);
  useEffect(() => {
    outputAdapter.clearOutput();
  }, [clearTrigger]);
  return <div>
    <div>
      { showEditor &&
        <CodeMirrorEditor
          autoRun={autoRun}
          code={code}
          outputAdapter={outputAdapter}
        />
      }
    </div>
    <div
      css={{
        '& .jp-OutputPrompt': {
          display: 'none',
        },
      }}
    >
      <LuminoAttached>{outputAdapter.panel}</LuminoAttached>
    </div>
  </div>
}

OutputLumino.defaultProps = {
  executeTrigger: 0,
  clearTrigger: 0,
} as Partial<IOutputProps>;

export default OutputLumino;
