import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CentralService } from 'src/app/services/central.service';
import { MatSnackBar } from '@angular/material';
import { showMessage } from 'src/app/models/exports';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {

  form: FormGroup;
  public file: File;
  urlImg: any;
  img: any;

  constructor( private centralService: CentralService, private snackBar: MatSnackBar ) {
    this.form = new FormGroup({
      'img': new FormControl(null, Validators.required)
    });
    this.img = JSON.parse(localStorage.getItem('user')).img;
  }

  ngOnInit() {
  }

  uploadImage() {
    const img = new FormData();
    img.append('img', this.file);
    console.log(img.getAll('img'));
    this.centralService.uploadImage(img).subscribe(
      data => {
        showMessage('Imagen subida con éxito', this.snackBar);
        console.log(data);
      },
      error => {
        showMessage(error, this.snackBar);
        console.log(error);
      }
    );
  }

  selectImage(event) {
    this.file = event.target.files[0];

    if (this.file.type.indexOf('image') < 0) {
      showMessage('Elige solamente imágenes', this.snackBar);
    }

    const reader = new FileReader();
    const urlFile = reader.readAsDataURL(this.file);
    reader.onloadend = () => this.urlImg = reader.result;
  }
}
