import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Aniamation Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Extrenal Module
import { AppRoutingModule } from './module/app-routing.module';
import { AppMaterialModule } from './module/material.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
