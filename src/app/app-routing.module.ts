import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { CardConviteComponent } from './card-convite/card-convite.component';
import { SuccessComponent } from './feedbacks/success/success.component';
import { ErrorComponent } from './feedbacks/error/error.component';


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
