import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  quantidadeInput = 1;
  form = new FormGroup({
    nome: new FormControl('')
  });
  inputs = [];
  msgError;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addInputs() {
    if(this.inputs.length == 0 && this.inputs.length < 3) {
      this.inputs.push(this.form.addControl('acompanhante', new FormControl('')));
    }else {
      this.msgError = "* Limite de campos atingido.";
      return;
    }
  }

  confirmarPresenca() {
    console.log(this.form.value);
  }

  cancelarPresenca() {
    this.router.navigate(['']);
  }

}
