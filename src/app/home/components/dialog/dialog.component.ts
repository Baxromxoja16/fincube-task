import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../shared/material.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  close() {
    this.dialogRef.close({
      result: true
    });
  }
}
