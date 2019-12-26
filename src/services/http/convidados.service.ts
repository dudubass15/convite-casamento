import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {

  constructor(private http: HttpClient) { }

  addRegistro(params) {
    // let dados = new HttpHeaders()
    // .append('nome_convidado', params.nome_convidado)
    // .append('nome_acompanhante', params.nome_acompanhante);

    // return this.http.post<any>(environment.webservice + '/convite', dados, {headers: dados}).pipe().toPromise();

    return this.http.post<any>(environment.webservice + '/convite', params).toPromise();
  }

  convidadosConfirmados() {
    return this.http.get(environment.webservice + '/convite/confirmados').toPromise();
  }

}
