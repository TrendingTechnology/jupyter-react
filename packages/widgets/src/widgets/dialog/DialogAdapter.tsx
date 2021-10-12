import { Dialog as JPDialog } from '@jupyterlab/apputils';

class DialogAdapter {
  public dialog: JPDialog<any>;
  public constructor() {
    this.dialog = new JPDialog({
      title: 'Dialog Title',
      body: 'This is the body of the dialog...',
      buttons: [
        JPDialog.cancelButton(),
        JPDialog.okButton(),
      ]
    });
  }
}

export default DialogAdapter;
