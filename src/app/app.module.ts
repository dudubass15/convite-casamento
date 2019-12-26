import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardConviteComponent } from './card-convite/card-convite.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './feedbacks/success/success.component';
import { ErrorComponent } from './feedbacks/error/error.component';
import { ConvidadosConfirmadosComponent } from './convidados-confirmados/convidados-confirmados.component';

@NgModule({
  declarations: [
    AppComponent,
    CardConviteComponent,
    FormularioComponent,
    SuccessComponent,
    ErrorComponent,
    ConvidadosConfirmadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
