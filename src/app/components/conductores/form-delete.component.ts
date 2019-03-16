import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
    selector: 'app-form-delete',
    templateUrl: './form-delete.component.html'
  })

  export class FormDeleteComponent {
    constructor(private dialogRef: MatDialogRef<FormDeleteComponent>,
      @Inject(MAT_DIALOG_DATA) private data: any,
      private driverService: DriversService,
      private snackBar: MatSnackBar) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    delete() {
      this.driverService.deleteDriver(this.data.id).subscribe(
        data => {
          this.openMessage('conductor eliminado');
        },
        error => {
          this.openMessage(error);
        }
      );
    }

    openMessage(message:any) {
      this.snackBar.open(message, 'ok', {duration: 15000});
    }
  }