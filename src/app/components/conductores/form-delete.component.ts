import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { DriversService } from 'src/app/services/drivers.service';
import { showMessage } from 'src/app/models/exports';

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
          showMessage('Condutor eliminado', this.snackBar);
        },
        error => {
          showMessage(error, this.snackBar);
        }
      );
    }

  }
