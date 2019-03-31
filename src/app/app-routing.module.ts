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
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HelpComponent } from './components/help/help.component';
import { AuthGuard } from './guards/auth.guard';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ChatComponent } from './components/chat/chat.component';

const loginRoutes: Routes = [
  {path: 'iniciar', component: IniciarSesionComponent},
  {path: 'cambiar-password', component: ChangePasswordComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

const dashboardRoutes: Routes = [
  {path: 'inicio', component: InicioComponent, data: {breadcrumb: 'Inicio'}},
  {path: 'conductores', component: ConductoresComponent, data: {breadcrumb: 'Conductores'}},
  {path: 'mapa', component: MapComponent, data: {breadcrumb: 'Mapa'}},
  {path: 'agregar', component: AgregarConductorComponent, data: {breadcrumb: 'Agregar Conductor'}},
  {path: 'perfil', component: PerfilComponent, data: {breadcrumb: 'Perfil'}},
  {path: 'solicitudes', component: ClientesComponent, data: {breadcrumb: 'Solicitudes'}},
  {path: 'mensajes', component: ChatComponent, data: {breadcrumb: 'Chat'}},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'}
];

const landingRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'inicio-sesion', component: LoginComponent, children: loginRoutes},
  {path: 'help', component: HelpComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

const routes: Routes = [
  {path: 'landing', component: WrapperComponent, children: landingRoutes},
  {path: 'dashboard', component: DashboardComponent, children: dashboardRoutes, data: {breadcrumb: 'Panel'}, canActivate: [AuthGuard]},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', pathMatch: 'full', redirectTo: '/landing/home'},
  {path: '**', pathMatch: 'full', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
