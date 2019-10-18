import { Component, OnInit } from '@angular/core';
import { ListarPessoasRepositorioService } from 'src/app/services/listar-pessaos.service';

@Component({
  selector: 'app-pagina-de-teste',
  templateUrl: './pagina-de-teste.component.html',
  styleUrls: ['./pagina-de-teste.component.css']
})
export class PaginaDeTesteComponent implements OnInit {

  //Propriedades
  acaoDoClick = "";
  clicado = true;

  public variavelName = "";
  public exibirMensagem = true;
  public variavelCor = "semCor";
  public listOfItens = ["bala", "vassoura", "dado", "peteca"];
  public variavelParaPipe = "Frase modificada pelo pipe";
  public birthday = new Date(1989, 5, 25);
  public pessoaJson = {
    "primeiroNome" : "Fagner",
    "segundoNome" : "Oliveira",
  }

  //Declaracao de uma lista
  public listaDePessoasComoVariavel = [
    {"id": 1, "nome":"Fagner", "idade": 30},
    {"id": 2, "nome":"Julia", "idade": 28},
    {"id": 3, "nome":"Fabiana", "idade": 33},
    {"id": 4, "nome":"Elizabeth", "idade": 60}
  ];

  //Propriedades Repositorios
  public listarPessoaServiceRepositorio:ListarPessoasRepositorioService;

  //Propriedades
  public listaDePessoasHardCode = [];
  public listaDePessoasHttpRequest = [];

  constructor(private _listarPessoasService: ListarPessoasRepositorioService) {
    //A forma de instanciar apresentada no curso é no metodo ngOnInit(), mas aqui deu certo também. Prediro instanciar aqui no construtor.
    this.listarPessoaServiceRepositorio = this._listarPessoasService;
  }

  ngOnInit() {
    //this.listarPessoaServiceRepositorio = this._listarPessoasService;

    //Metodo hardcode
    this.listaDePessoasHardCode = this.listarPessoaServiceRepositorio.listarPessaosHardCode();

    //Metodo elegante
    this.listarPessoaServiceRepositorio.listarPessaosHttpRequest()
                                      .subscribe(data => this.listaDePessoasHttpRequest = data);
  }

  onClick(event){
    console.log(event.screenX); //Pega a coordenada do click no eixo X
    console.log(event); //Pega a coordenada do click no eixo X
    if(this.clicado){
      this.acaoDoClick = "Fagner de Oliveira";
      this.clicado = false;
    }      
    else{
      this.acaoDoClick = "";
      this.clicado = true;
    }      
  };

  logMessage(valor){
    console.log(valor)
  };

}
