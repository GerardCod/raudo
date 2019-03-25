import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriversService } from 'src/app/services/drivers.service';
import { showMessage } from 'src/app/models/exports';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./conductores.component.css']
})
export class FormUpdateComponent implements OnInit{

  user: any = {
    driver: {
      name: '',
      last_name: '',
      telephone: '',
      username: ''
    },
    unit: {
      plates: '',
      model: '',
      year: 0
    }
  };

  constructor(
    private dialogRef: MatDialogRef<FormUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private driverService: DriversService,
    private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    onNoClick() {
      this.dialogRef.close();
    }

    updateDriver() {
      this.driverService.updateDriver(this.data.id, this.user).subscribe(
        data => {
          showMessage('Conductor actualizado', this.snackBar);
        },
        error => showMessage(error, this.snackBar)
      );
    }
}
