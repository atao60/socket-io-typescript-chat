import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { DialogUserType } from './dialog-user-type';

@Component({
  selector: 'tcc-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.css']
})
export class DialogUserComponent {

  DialogUserType = DialogUserType;

  previousUsername: string;

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public params: any) {
    this.previousUsername = params.username ? params.username : undefined;
  }

  public onSave(): void {
    this.dialogRef.close({
      username: this.params.username,
      dialogType: this.params.dialogType,
      previousUsername: this.previousUsername
    });
  }

}
