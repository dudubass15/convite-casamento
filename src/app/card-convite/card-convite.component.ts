import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-convite',
  templateUrl: './card-convite.component.html',
  styleUrls: ['./card-convite.component.scss']
})
export class CardConviteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  formulario() {
    this.router.navigate(['formulario']);
  }

}
