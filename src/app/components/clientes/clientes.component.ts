import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface CustomerData {
  id: number;
  name: string;
  email: string;
}

const NAMES: string[] = ['Betsaida', 'Adelina', 'Gerardo', 'Adalberto', 'Luis', 'Ana', 'Sofía', 'Mercedez',
  'Laura', 'Arturo', 'Miranda', 'Tomás', 'Azalia', 'Ixchel', 'Jordan', 'Juan', 'Azrael', 'German', 'Diego',
  'Gildardo', 'Omar', 'Olivia', 'Aide', 'Pedro'];

const LAST_NAMES: string[] = ['Ramirez', 'Carrera', 'Aguilar', 'Calderon', 'Martinez', 'Roman', 'Torres',
  'Jimenez', 'Lopez', 'Romualdo', 'Moreno', 'Flores', 'Escobedo', 'Cordova', 'Gil', 'Luna', 'Dimas', 'Cid',
  'Uscanga', 'Gonzalez', 'Barragan', 'Bravo'];

const PROVIDERS: string[] = ['gmail.com', 'hotmail.com', 'yahoo.com'];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource: MatTableDataSource<CustomerData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const customers = Array.from({length: 50}, (_, k) => {
      return this.createCustomer((k + 1));
    });

    console.log(customers);
    this.dataSource = new MatTableDataSource(customers);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCustomer(id: number): CustomerData {
    const nameCustomer =
    `${NAMES[Math.round(Math.random() * (NAMES.length - 1))]} ${LAST_NAMES[Math.round(Math.random() * (LAST_NAMES.length - 1))]}`;
    return {
      id: id,
      name: nameCustomer,
      email: `${nameCustomer.replace(' ', '').toLowerCase()}@${PROVIDERS[Math.round(Math.random() * (PROVIDERS.length - 1))]}`
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




