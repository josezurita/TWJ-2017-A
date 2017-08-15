import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { HttpModule } from "@angular/http";
import { InicioComponent } from './inicio/inicio.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ListaComponent } from './lista/lista.component';
import { TodosComponent } from './todos/todos.component';
import { ModuloDeRutas } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    InicioComponent,
    CarruselComponent,
    ListaComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ModuloDeRutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
