import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatInputModule,
  MatIconModule,
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
  MatBadgeModule,
  MatDialogModule,
  MatTabsModule,
  MatGridListModule,
  MatExpansionModule,
  MatSlideToggleModule
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
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
import { ConductoresComponent } from './components/conductores/conductores.component';
import { FormDeleteComponent } from './components/conductores/form-delete.component';
import { FormUpdateComponent } from './components/conductores/form-update.component';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CountComponent } from './components/count/count.component';
import { UpdateCountComponent } from './components/update-count/update-count.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { UploadImgComponent } from './components/upload-img/upload-img.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { APÏ_URL} from '../app/global/config';
import { PipesModule } from './pipes/pipes.module';
import { ChatComponent } from './components/chat/chat.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ListDriversComponent } from './components/list-drivers/list-drivers.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { RequestComponent } from './components/request/request.component';

const config: SocketIoConfig = {
  url: APÏ_URL,
  options: {}
};

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
    NoficationsComponent,
    ConductoresComponent,
    FormDeleteComponent,
    FormUpdateComponent,
    CountComponent,
    UpdateCountComponent,
    BreadcrumbsComponent,
    UpdatePasswordComponent,
    UploadImgComponent,
    ChangePasswordComponent,
    ChatComponent,
    ConversationComponent,
    ListDriversComponent,
    ListClientsComponent,
    RequestComponent
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
    MatBadgeModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    MatGridListModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBFGDgZtkqvlcgyihdkveZVLu95_dCOoTc'
    }),
    SocketIoModule.forRoot(config),
    PipesModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatSlideToggleModule
  ],
  entryComponents: [
    FormDeleteComponent,
    FormUpdateComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent, ConductoresComponent],
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
