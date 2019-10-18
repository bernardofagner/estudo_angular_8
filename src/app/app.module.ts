import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

//Components
import { AppComponent } from './app.component';
import { PaginaDeTesteComponent } from './paginas/pagina-de-teste/pagina-de-teste.component';

//Services
import { ListarPessoasRepositorioService } from './services/listar-pessaos.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginaDeTesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ListarPessoasRepositorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
