import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './shared/http-response/forbidden/forbidden.component';
import { NotFoundComponent } from './shared/http-response/not-found/not-found.component';
import { Unauthorized401Component } from './shared/http-response/unauthorized401/unauthorized401.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { UserComponent } from './shared/auth/user/user.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    data: { titulo: 'Home' }
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    data: { titulo: 'Dashboard' }
  },
  {
    path: "empleados",
    component: EmpleadosComponent,
    data: { titulo: 'Empleados' }
  },
  {
    path: "productos",
    component: ProductosComponent,
    data: { titulo: 'Productos' }
  },
  {
    path: "page-404",
    component: NotFoundComponent,
    data: { titulo: 'pagina - 404' }
  },
  {
    path: "page-403",
    component: ForbiddenComponent,
    data: { titulo: 'pagina - 403' }
  },
  {
    path: "page-401",
    component: Unauthorized401Component,
    data: { titulo: 'pagina - 401' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { titulo: 'login' }
  },
  {
    path: 'user',
    component: UserComponent,
    data: { titulo: 'perfil' }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
