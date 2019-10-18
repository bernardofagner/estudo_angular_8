import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaDeTesteComponent } from './paginas/pagina-de-teste/pagina-de-teste.component';


const routes: Routes = [
  {path: '', component:PaginaDeTesteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
