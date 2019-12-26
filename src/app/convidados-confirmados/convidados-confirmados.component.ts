import { Component, OnInit } from '@angular/core';
import { ConvidadosService } from 'src/services/http/convidados.service';

@Component({
  selector: 'app-convidados-confirmados',
  templateUrl: './convidados-confirmados.component.html',
  styleUrls: ['./convidados-confirmados.component.scss']
})
export class ConvidadosConfirmadosComponent implements OnInit {
  
  listaConfirmados = [];
  total;

  constructor(private convidadosService: ConvidadosService) { }

  ngOnInit() {
    this.convidadosService.convidadosConfirmados().then(c => {
      this.listaConfirmados = this.listaConfirmados.concat(c);
      this.total = this.listaConfirmados.length;
    });
  }

}
