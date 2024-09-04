import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  constructor(private dialogRef: MatDialogRef<PopUpComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
