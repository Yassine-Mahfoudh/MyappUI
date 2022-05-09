import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { AdministrationModule } from './administration/administration.module';
import { HomeComponent } from './home/home.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MatDialogModule } from '@angular/material/dialog';

import{MatSidenavModule} from '@angular/material/sidenav';
import{MatMenuModule} from '@angular/material/menu'
import{MatListModule} from '@angular/material/list'
import{MatIconModule} from '@angular/material/icon'
import{MatDividerModule} from '@angular/material/divider'
import{MatToolbarModule} from '@angular/material/toolbar'


import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,PB_DIRECTION } from "ngx-ui-loader";
import { AddprojectformComponent } from './addprojectform/addprojectform.component';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const ngxUiLoaderConfig:NgxUiLoaderConfig = {
  text:"Loading...",
  textColor:"#ffffff",
  textPosition:"center-center",
  pbColor:"blue",
  bgsColor:"blue",
  fgsColor:"blue",
  fgsType:SPINNER.doubleBounce,
  fgsSize:100,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:5
}

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    HomeComponent,
    ResetpasswordComponent,
    AddprojectformComponent,
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AdministrationModule,
    MatDialogModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatSnackBarModule,
    

          // * MATERIAL IMPORTS
          MatSidenavModule,
          MatToolbarModule,
          MatMenuModule,
          MatIconModule,
          MatDividerModule,
          MatListModule,
          MatCardModule,
          MatIconModule,
          MatToolbarModule,
          MatTabsModule,
          MatFormFieldModule,
          MatInputModule,
          FlexLayoutModule,
          FullCalendarModule

  ]
})
export class PagesModule { }
