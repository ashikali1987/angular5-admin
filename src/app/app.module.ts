import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Aniamation Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Extrenal Module
import { AppRoutingModule } from './module/app-routing.module';
// import { AppMaterialModule } from './module/material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Services
import { ConfigService } from './services/config.service';
import { EmployeDetailComponent } from './pages/employe-detail/employe-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
    //AppMaterialModule
  ],
  providers: [ ConfigService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
