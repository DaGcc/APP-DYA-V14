import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegationComponent } from './navegation/navegation.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { EmpleadosComponent } from './empleados/empleados.component';
import { ProductosComponent } from './productos/productos.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { MaterialModule } from './_material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { PieChartComponent } from './shared/pie-chart/pie-chart.component';
import { PrimengModule } from './_primeng/primeng.module';
import { TableComponent } from './shared/table/table.component';
import { ExpansionTableComponent } from './shared/expansion-table/expansion-table.component';
import { HomeComponent } from './home/home.component';
import { CaruselComponent } from './shared/carusel/carusel.component';
import { ProductoServiceService } from './service/producto-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DataViewComponent } from './shared/data-view/data-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollService } from './service/scroll.service';
import { ViewportScroller } from '@angular/common';
import { NotFoundComponent } from './shared/http-response/not-found/not-found.component';
import { ForbiddenComponent } from './shared/http-response/forbidden/forbidden.component';
import { Unauthorized401Component } from './shared/http-response/unauthorized401/unauthorized401.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { RecuperarComponent } from './shared/auth/login/recuperar/recuperar.component';
import { CrearCuentaComponent } from './shared/auth/login/crear-cuenta/crear-cuenta.component';
import { UserComponent } from './shared/auth/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    DashboardComponent,
    EmpleadosComponent,
    ProductosComponent,
    BreadcrumbComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    ExpansionTableComponent,
    HomeComponent,
    CaruselComponent,
    DataViewComponent,
    NotFoundComponent,
    ForbiddenComponent,
    Unauthorized401Component,
    LoginComponent,
    CrearCuentaComponent,
    RecuperarComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
