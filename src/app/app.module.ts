import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {
  MatButtonModule,
  MatRippleModule,
  MatTooltipModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSnackBarModule,
  MatBadgeModule
} from '@angular/material';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';
import { ServiciosComponent } from './components/shared/servicios/servicios.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConductoresComponent } from './components/conductores/conductores.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { AgregarConductorComponent } from './components/agregar-conductor/agregar-conductor.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MapComponent } from './components/map/map.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { CostosComponent } from './components/shared/costos/costos.component';
import { ChartComponent } from './components/chart/chart.component';
import { DonaComponent } from './components/dona/dona.component';
import { NavbarDashComponent } from './components/shared/navbar-dash/navbar-dash.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HelpComponent } from './components/help/help.component';
import { NoficationsComponent } from './components/nofications/nofications.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactoComponent,
    ServiciosComponent,
    IniciarSesionComponent,
    RegistroComponent,
    LoginComponent,
    DashboardComponent,
    ConductoresComponent,
    SidebarComponent,
    AgregarConductorComponent,
    ClientesComponent,
    MapComponent,
    PerfilComponent,
    InicioComponent,
    WrapperComponent,
    CostosComponent,
    ChartComponent,
    DonaComponent,
    NavbarDashComponent,
    NotFoundComponent,
    HelpComponent,
    NoficationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartsModule,
    MatSnackBarModule,
    BreadcrumbsModule,
    MatBadgeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFGDgZtkqvlcgyihdkveZVLu95_dCOoTc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AppModule { }
