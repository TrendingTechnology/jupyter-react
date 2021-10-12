import { OutputArea, OutputAreaModel } from '@jupyterlab/outputarea';
import { IRenderMime, RenderMimeRegistry, standardRendererFactories } from '@jupyterlab/rendermime';
import { Kernel } from '@jupyterlab/services';

class OutputAdapter {
  private _kernel: Promise<Kernel.IKernelConnection> | null;
  private _renderers: IRenderMime.IRendererFactory[];
  private _outputArea: OutputArea;
  private _url: string;
//  private _defaultLang: any;
//  private _defaultTheme: any;
  private _isolateCells: boolean;
  private _fromStorage: boolean = false;
  private _useStorage: string;
  private _storageKey: string;
  private _eventName: string;
  private _msgLoading: string;
  private _msgError: string;

  public constructor(
    kernel: Promise<Kernel.IKernelConnection>, 
    model: OutputAreaModel,
    options: any = {}
  ) {
    this._kernel = kernel;
    this._url = options.url || '';
//    this.defaultLang = options._language || 'python';
//    this.defaultTheme = options._theme || 'default';
    this._isolateCells = options.isolateCells == undefined ? false : options.isolateCells;
    this._useStorage = options.useStorage == undefined ? true : options.useStorage;
    this._storageKey = options.storageKey || 'dla-jupyter-output';
    this._eventName = options.eventName || 'dla-jupyter-output';
    this._msgLoading = options.msgLoading || 'Loading...';
    this._msgError = options.msgError || 'Connecting failed. Please reload and try again...';
    if (!options.noAutoInit) {
      this.renderCell(model);
    }
  }

  private renderCell(model: OutputAreaModel) {
    const rendermime = new RenderMimeRegistry({
      initialFactories: this.getRenderers(),
    });
    this._outputArea = new OutputArea({
      model: model,
      rendermime: rendermime,
    });
  }

  public execute(code: string) {
    this.event('executing', code);
    if (this._kernel) {
      if (this._isolateCells) {
        this._kernel.then((k) => {
          k.restart()
            .then(() => this.render(code))
            .catch((e: Error) => {
              this.event('failed', e.message);
              this._kernel = null;
              this._outputArea.model.clear();
              this._outputArea.model.add({
                output_type: 'stream',
                name: 'failure',
                text: this._msgError,
              });
            });
          return;
        });
      }
      this._outputArea.model.clear();
      this.render(code);
      return;
    }
    this.event('requesting-kernel', {});
    const url = this._url.split('//')[1];
    const action = !this._fromStorage ? 'Launching' : 'Reconnecting to';
    this._outputArea.model.clear();
    this._outputArea.model.add({
      output_type: 'stream',
      name: 'stdout',
      text: `${action} kernel on ${url}...`,
    });
    new Promise((resolve, reject) =>
      this._kernel!.then(resolve).catch(reject)
    )
    .then((kernel: Kernel.IKernelConnection) => {
      this.render(code);
    })
    .catch((e: Error) => {
      this.event('failed', e.message);
      this._kernel = null;
      if (this._useStorage && typeof window !== 'undefined') {
        this._fromStorage = false;
        window.localStorage.removeItem(this._storageKey);
      }
      this._outputArea.model.clear();
      this._outputArea.model.add({
        output_type: 'stream',
        name: 'failure',
        text: this._msgError,
      });
    });
  }

  public clearOutput() {
    this._outputArea.model.clear();
  }

  private render(code: string) {
    this._kernel!.then((k) => {
      this._outputArea.future = k.requestExecute({code})
    });
    this._outputArea.model.add({
      output_type: 'stream',
      name: 'loading',
      text: this._msgLoading,
    });
    this._outputArea.model.clear(true);
  }

  private getRenderers(): IRenderMime.IRendererFactory[] {
    if (!this._renderers) {
      /*
      this._renderers = standardRendererFactories.filter(factory =>
        factory.mimeTypes.includes('text/latex')
          ? typeof window !== 'undefined' && (window as any).MathJax
          : true
      );
      */
      this._renderers = standardRendererFactories.filter(_ => true);
    }
    return this._renderers;
  }

  private event(status: string, data: any) {
    const ev = new CustomEvent(this._eventName, {detail: {status, data}});
    document.dispatchEvent(ev);
  }

  get panel(): OutputArea {
    return this._outputArea;
  }

}

export default OutputAdapter;
