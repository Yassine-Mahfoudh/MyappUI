import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { DefaultComponent } from './dashboards/default/default.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboard', component:DefaultComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'home', component:HomeComponent },
  { path: 'admin', component:AdminComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']} },
  { path: 'user', component:UserComponent,canActivate:[AuthGuard],data : {profils:['USER']} },
  { path: 'login', component:LoginComponent },
  { path: 'forbidden', component:ForbiddenComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }