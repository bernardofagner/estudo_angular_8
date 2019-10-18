import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPessoas } from '../models/pessoas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListarPessoasRepositorioService {

  public listaDePessoas = [
    {
      "id": 1,
      "nome":"Fagner",
      "idade": 30
    },
    {
      "id": 2,
      "nome":"Julia",
      "idade": 28
    },
    {
      "id": 3,
      "nome":"Fabiana",
      "idade": 33
    },
    {
      "id": 4,
      "nome":"Elizabeth",
      "idade": 60
    }
  ];

  private _url : string = "/assets/database_fake/pessoas.json";

  constructor(private http: HttpClient) { }

  listarPessaosHardCode(){
    return this.listaDePessoas;
  }

  listarPessaosHttpRequest(): Observable<IPessoas[]>{  
    return this.http.get<IPessoas[]>(this._url);
  }
}
