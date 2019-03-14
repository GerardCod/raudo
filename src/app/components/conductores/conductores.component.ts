import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';

export interface TaxiData {
  id: string;
  name: string;
  user: string;
  phone: string;
  unity: string;
  placa: string;
  model: string;
  year: string;
  update: string;
  delete: string;
}

const NAMES: string[] = ['María', 'Arturo', 'Olivia', 'Armando', 'Amelia', 'Javier',
  'Charlotte', 'Teodora', 'Israel', 'Oliver', 'Isabella', 'Juan',
  'Cora', 'Levi', 'Violeta', 'Axel', 'Mia', 'Tomas', 'Elizabeth'];

const LAST_NAMES: string[] = ['Aguilar', 'Jimenez', 'Altamirano', 'Carrera', 'Zarate', 'Roman',
  'Cayetano', 'Labras', 'López', 'Islas', 'Guerra', 'Paz', 'Hernandez', 'Ramírez', 'Moreno', 'Blanco',
  'Acevedo', 'Torres'];

const PHONE: string[] = ['2381804026', '2383746046', '2383834383', '2388692034', '2380491934', '2380192934',
  '2381033040', '2381038434', '2387573456', '2380348936', '2381349053'];

const UNITIES: string[] = ['oiew', 'perfmr', 'omf', 'oifmrefm', 'ioernt', 'fijnvf', 'feork', 'xlc', 'eoigfm', 'eokfmr',
  'zdfokd', 'lkcmv', 'dmfom', 'ioefor', 'sodn', 'eropgf'];

const MODELS: string[] = ['oiew', 'perfmr', 'omf', 'oifmrefm', 'ioernt', 'fijnvf', 'feork', 'xlc', 'eoigfm', 'eokfmr',
'zdfokd', 'lkcmv', 'dmfom', 'ioefor', 'sodn', 'eropgf'];

const YEARS: string[] = ['2000', '2001', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
  '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'user', 'phone', 'unity', 'placa', 'model', 'year', 'update', 'delete'];
  dataSource: MatTableDataSource<TaxiData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private driverService: DriversService) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    this.driverService.getDrivers().subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
}

function createNewUser(id: number): TaxiData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      LAST_NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  return {
    id: id.toString(),
    name: name,
    user: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    phone: PHONE[Math.round(Math.random() * (PHONE.length - 1))],
    unity: UNITIES[Math.round(Math.random() * (UNITIES.length - 1))],
    model: MODELS[Math.round(Math.random() * (MODELS.length - 1))],
    placa: MODELS[Math.round(Math.random() * (MODELS.length - 1))],
    year: YEARS[Math.round(Math.random() * (YEARS.length - 1))],
    update: 'event_note',
    delete: 'cancel'
  };

}
