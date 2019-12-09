import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ConvidadosService } from 'src/services/http/convidados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  quantidadeInput = 1;
  form = new FormGroup({
    nome: new FormControl(''),
    acompanhante: new FormControl('')
  });
  inputs = [];
  msgLimite;
  classe;

  constructor(private router: Router, private registroConfirmacao: ConvidadosService) { }

  ngOnInit() {
  }

  addInputs() {
    if(this.inputs.length == 0 && this.inputs.length < 3) {
      this.inputs.push(this.form.addControl('acompanhante', new FormControl('')));
    }else {
      this.msgLimite = "* Limite de campos atingido.";
      return;
    }
  }

  confirmarPresenca() {
    let params = {
      nome_convidado: this.form.controls.nome ? this.form.controls.nome.value : '',
      nome_acompanhante: this.form.controls.acompanhante ? this.form.controls.acompanhante.value : '',
    }

    if(!params.nome_convidado && !params.nome_acompanhante) {
      
      this.classe = true;

    }else{

      this.registroConfirmacao.addRegistro(params).then(c => {
        if(c.erro) {
          this.router.navigate(['feedback/error']);
        }else {
          this.router.navigate(['feedback/success']);
        }
      });

    }
  }

  cancelarPresenca() {
    this.router.navigate(['']);
  }

}
