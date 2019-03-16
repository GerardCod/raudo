import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';
import { FormDeleteComponent } from './form-delete.component';
import { FormUpdateComponent } from './form-update.component';

export interface TaxiData {
  id: string;
  name: string;
  user: string;
  phone: string;
  placa: string;
  model: string;
  year: string;
  update: string;
  delete: string;
}

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {

  displayedColumns: string[] = ['name', 'user', 'phone', 'placa', 'model', 'year', 'update', 'delete'];
  dataSource: MatTableDataSource<TaxiData>;
  users: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,
    private driverService: DriversService,
    private dialog: MatDialog) {
    // Assign the data to the data source for the table to render
    this.driverService.getDrivers().subscribe(
      data => {
        this.users = data;
        this.users = this.users.map(createNewUser);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navigateToAdd() {
    this.router.navigate(['agregar']);
  }

  openDialogDelete(id: any, name: any) {

    const dialogRef = this.dialog.open( FormDeleteComponent , {
      width: '300px',
      data: {id: id, name: name}
    });

    dialogRef.afterClosed().subscribe(
      data => {
        console.log('conductor borrado');
        this.driverService.getDrivers().subscribe(
// tslint:disable-next-line: no-shadowed-variable
          (data: any) => {
            this.users = data;
            this.users = this.users.map(createNewUser);
            this.dataSource = new MatTableDataSource(this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error => console.log(error)
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialogUpdate(id: any) {

    const dialogRef = this.dialog.open(FormUpdateComponent, {
      width: '800px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(
      data => {
        this.driverService.getDrivers().subscribe(
// tslint:disable-next-line: no-shadowed-variable
          (data: any) => {
            this.users = data;
            this.users = this.users.map(createNewUser);
            this.dataSource = new MatTableDataSource(this.users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error => console.log(error)
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}

function createNewUser(user: any): TaxiData {

  return {
    id: user._id,
    name: user.driver.name + ' ' + user.driver.last_name,
    user: user.driver.username,
    phone: user.driver.telephone,
    model: user.unit.model,
    placa: user.unit.plates,
    year: user.unit.year,
    update: 'event_note',
    delete: 'cancel'
  };

}
