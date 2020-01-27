import { UserService } from './services/user.service';
import { PrisonerService } from './services/prisoner.service';
import { MaterialModule } from './modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewLocationHistoryDialogComponent } from './components/view-location-history-dialog/view-location-history-dialog.component';
import { AddPrisonerDialogComponent } from './components/add-prisoner-dialog/add-prisoner-dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewLocationHistoryDialogComponent,
    AddPrisonerDialogComponent,
    SnackbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    PrisonerService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ViewLocationHistoryDialogComponent,
    AddPrisonerDialogComponent,
    SnackbarComponent
  ]
})
export class AppModule { }
