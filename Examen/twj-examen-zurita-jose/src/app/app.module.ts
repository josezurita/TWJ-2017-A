import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PasteleriaComponent } from '../components/pasteleria/pasteleria.component';
import { InicioComponent } from '../components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PasteleriaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
