
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import { EstiloComponent } from './estilo/estilo.component';
import {InicioComponent} from "./Componentes/inicio/inicio.component";
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { OrbitalComponent } from './Componentes/orbital/orbital.component';
import { RotationComponent } from './Componentes/rotation/rotation.component';
import { TerrainComponent } from './Componentes/terrain/terrain.component';
import { GravityComponent } from './Componentes/gravity/gravity.component';


@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PlanetaStarWarsComponent,
    OrbitalComponent,
    RotationComponent,
    TerrainComponent,
    GravityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // http
  ],
  bootstrap: [InicioComponent]
})


export class AppModule { }
