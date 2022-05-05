import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdministrationRoutingModule } from './administration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { SalleComponent } from './salle/salle.component';
import { ModalFormComponentComponent } from './modal-form-component/modal-form-component.component';


import { ModalModule } from "ngx-bootstrap/modal";
import { ProfilComponent } from './profil/profil.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { SalleListComponent } from './salle-list/salle-list.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { DepartementComponent } from './departement/departement.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { DemandeComponent } from './demande/demande.component';
import { DemandeListComponent } from './demande-list/demande-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FonctionaliteComponent } from './fonctionalite/fonctionalite.component';
import { FonctionaliteListComponent } from './fonctionalite-list/fonctionalite-list.component';
import { LogaccessComponent } from './logaccess/logaccess.component';
import { UsersComponent } from './users/users.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import {MatTabsModule} from '@angular/material/tabs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import{MatIconModule} from '@angular/material/icon'

import {MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import{MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { LogdataComponent } from './logdata/logdata.component'
import { SortDirective } from 'src/app/shared/Utils/directive/sort.directive';


@NgModule({
  declarations: [
    ProfilComponent,
    UsersComponent,
    SalleComponent,
    ModalFormComponentComponent,
    ProfilListComponent,
    SalleListComponent,
    ProjetComponent,
    ProjetListComponent,
    DepartementComponent,
    DepartementListComponent,
    DemandeComponent,
    DemandeListComponent,
    UsersListComponent,
    EmployeeComponent,
    EmployeeListComponent,
    FonctionaliteComponent,
    FonctionaliteListComponent,
    LogaccessComponent,
    MyaccountComponent,
    LogdataComponent,
    SortDirective,
    
 
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    ModalModule.forRoot(),
    //MatDialogModule,
    //MatCardModule,
   // MatIconModule,
    //MatToolbarModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FontAwesomeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatDialogModule
   
  ]
})
export class AdministrationModule { }
