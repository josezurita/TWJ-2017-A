/**
 * Created by jose.zurita on 15/8/17.
 */
import {RouterModule, Routes} from "@angular/router";
import { TodosComponent } from './todos/todos.component';
import { ListaComponent } from './lista/lista.component';
import {ModuleWithProviders} from "@angular/core";


//variable constante de tipo route
export const routes:Routes = [

  {
    path:"todos",
    component:TodosComponent
  },
  {
    path:"lista",
    component:ListaComponent
  }
];

export  const  ModuloDeRutas :ModuleWithProviders =
  RouterModule.forRoot(routes);
