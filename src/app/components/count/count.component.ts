import { Component, OnInit, Input } from '@angular/core';
import { CentralService } from 'src/app/services/central.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

@Input() currentUser: any;
  img: any;
  avatar: any;
  checked: boolean;

  constructor(private centralService: CentralService, private snackBar: MatSnackBar) {
    this.img = JSON.parse(localStorage.getItem('user')).img;
    this.checked = JSON.parse(localStorage.getItem('user')).manageable;
    this.centralService.getImage().subscribe(
      data => this.createImageFromBlob(data),
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

  createImageFromBlob(blob: Blob) {
    const reader = new FileReader();
    const photo = new File([blob], this.img, {type: blob.type});
    reader.readAsDataURL(photo);
    reader.onload = (event: any) => {
      this.avatar = event.target.result;
      console.log(this.avatar);
    };
  }

  changeState() {
    this.checked = !this.checked;
    console.log(this.checked);
    this.centralService.setManageable(this.checked);
  }
}
