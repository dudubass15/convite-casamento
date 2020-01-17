import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-convite',
  templateUrl: './card-convite.component.html',
  styleUrls: ['./card-convite.component.scss']
})
export class CardConviteComponent implements OnInit {

  disabledBtn = true;

  constructor(private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  mapa() {
    open("https://goo.gl/maps/C59ngRxuAQbAhzdz6");
  }

  formulario() {
    this.router.navigate(['formulario']);
  }

}
