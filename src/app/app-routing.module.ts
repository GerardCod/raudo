import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConductoresComponent } from './components/conductores/conductores.component';
import { MapComponent } from './components/map/map.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarConductorComponent } from './components/agregar-conductor/agregar-conductor.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const loginRoutes: Routes = [
  {path: 'iniciar', component: IniciarSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

const dashboardRoutes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'conductores', component: ConductoresComponent},
  {path: 'mapa', component: MapComponent},
  {path: 'agregar', component: AgregarConductorComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'solicitudes', component: ClientesComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'}
];

const landingRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'inicio-sesion', component: LoginComponent, children: loginRoutes},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

const routes: Routes = [
  {path: 'landing', component: WrapperComponent, children: landingRoutes},
  {path: 'dashboard', component: DashboardComponent, children: dashboardRoutes},
  {path: '', pathMatch: 'full', redirectTo: '/landing/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
