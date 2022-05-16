import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { AddeventComponent } from './pages/addevent/addevent.component';
import { DemandeListComponent } from './pages/administration/demande-list/demande-list.component';
import { DemandeComponent } from './pages/administration/demande/demande.component';
import { DepartementListComponent } from './pages/administration/departement-list/departement-list.component';
import { DepartementComponent } from './pages/administration/departement/departement.component';
import { EmployeeListComponent } from './pages/administration/employee-list/employee-list.component';
import { EmployeeComponent } from './pages/administration/employee/employee.component';
import { FonctionaliteListComponent } from './pages/administration/fonctionalite-list/fonctionalite-list.component';
import { FonctionaliteComponent } from './pages/administration/fonctionalite/fonctionalite.component';
import { LogaccessComponent } from './pages/administration/logaccess/logaccess.component';
import { LogdataComponent } from './pages/administration/logdata/logdata.component';
import { ModalFormComponentComponent } from './pages/administration/modal-form-component/modal-form-component.component';
import { MyaccountComponent } from './pages/administration/myaccount/myaccount.component';
import { ProfilListComponent } from './pages/administration/profil-list/profil-list.component';
import { ProfilComponent } from './pages/administration/profil/profil.component';
import { ProjetListComponent } from './pages/administration/projet-list/projet-list.component';
import { ProjetComponent } from './pages/administration/projet/projet.component';
import { SalleListComponent } from './pages/administration/salle-list/salle-list.component';
import { SalleComponent } from './pages/administration/salle/salle.component';
import { UsersListComponent } from './pages/administration/users-list/users-list.component';
import { UsersComponent } from './pages/administration/users/users.component';
import { EditeventComponent } from './pages/editevent/editevent.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';

const routes: Routes = [
  //{ path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  // tslint:disable-next-line: max-line-length
 // { path: '', component: LayoutsComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
 // { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},//, canActivate: [AuthGuard] },

  //{ path: '', component:HomeComponent,canActivate:[AuthGuard],data : {profils:['USER']} },
  //{ path: 'home', component:HomeComponent,canActivate:[AuthGuard],data : {profils:['USER']} },

 // { path: '', component:DashboardComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']}},
  //{ path: '', component:HomeComponent,canActivate:[AuthGuard],data : {profils:['RH']} },


  { path: 'login', component: LoginComponent },
  
  { path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']}},
  { path: 'home', component:HomeComponent,canActivate:[AuthGuard],data : {profils:['RH','USER','MANAGER']} },
  
 // { path: 'Home', component:HomeComponent,canActivate:[AuthGuard],data : {profils:['USER']} },


  { path: 'forbidden',component:ForbiddenComponent },
  { path: 'resetpassword',component:ResetpasswordComponent },


  { path: 'salle',component:SalleComponent,canActivate:[AuthGuard],data : {profils:['RH']} },
  { path: 'sallelist',component:SalleListComponent,canActivate:[AuthGuard],data : {profils:['ADMIN','USER']} },
  //{ path: 'SalleList',component:SalleListComponent,canActivate:[AuthGuard],data : {profils:['USER']} },


  { path: 'profil',component:ProfilComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']} },
  { path: 'profillist',component:ProfilListComponent,canActivate:[AuthGuard],data : {profils:['RH']} },

  { path: 'projet',component:ProjetComponent,canActivate:[AuthGuard],data : {profils:['RH']} },
  { path: 'projetlist',component:ProjetListComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']} },

  { path: 'departement',component:DepartementComponent,canActivate:[AuthGuard],data : {profils:['RH']} },
  { path: 'departementlist',component:DepartementListComponent,canActivate:[AuthGuard],data : {profils:['ADMIN','USER']} },
 // { path: 'DepartementList',component:DepartementListComponent,canActivate:[AuthGuard],data : {profils:['USER']} },


  { path: 'demande',component:DemandeComponent,canActivate:[AuthGuard],data : {profils:['RH','USER']} },
  //{ path: 'Demande',component:DemandeComponent,canActivate:[AuthGuard],data : {profils:['USER']} },
  { path: 'demandelist',component:DemandeListComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']} },


  { path: 'user',component:UsersComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']} },
  { path: 'userlist',component:UsersListComponent,canActivate:[AuthGuard],data : {profils:['RH']} },

  { path: 'employee',component:EmployeeComponent,canActivate:[AuthGuard],data : {profils:['RH']} },
  { path: 'employeelist',component:EmployeeListComponent,canActivate:[AuthGuard],data : {profils:['ADMIN','USER']} },

 // { path: 'EmployeeList',component:EmployeeListComponent,canActivate:[AuthGuard],data : {profils:['USER']} },


  { path: 'fonctionalite',component:FonctionaliteComponent,canActivate:[AuthGuard],data : {profils:['RH']} },
  { path: 'fonctionalitelist',component:FonctionaliteListComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']}},

  { path: 'logaccess',component:LogaccessComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']} },
  { path: 'logdata',component:LogdataComponent,canActivate:[AuthGuard],data : {profils:['ADMIN']} },


  { path: 'modal',component:ModalFormComponentComponent,canActivate:[AuthGuard],data : {profils:['MANAGER','USER']} },
  { path: 'myAccount',component:MyaccountComponent },


  { path: 'addevent',component:AddeventComponent },

  { path: 'editevent',component:EditeventComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
