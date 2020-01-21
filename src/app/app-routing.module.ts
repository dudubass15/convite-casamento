import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { CardConviteComponent } from './card-convite/card-convite.component';
import { SuccessComponent } from './feedbacks/success/success.component';
import { ErrorComponent } from './feedbacks/error/error.component';
import { ConvidadosConfirmadosComponent } from './convidados-confirmados/convidados-confirmados.component';


const routes: Routes = [
  {
    path: '',
    component: CardConviteComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'listaConfirmados',
    component: ConvidadosConfirmadosComponent
  },
  {
    path: 'feedback/success',
    component: SuccessComponent
  },
  {
    path: 'feedback/error',
    component: ErrorComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
