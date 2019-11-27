import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  quantidadeInput = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addInputs() {
    this.quantidadeInput++;

    console.log(this.quantidadeInput);
  }

  confirmarPresenca() {

  }

  cancelarPresenca() {
    this.router.navigate(['']);
  }

}
