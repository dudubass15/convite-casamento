import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadosConfirmadosComponent } from './convidados-confirmados.component';

describe('ConvidadosConfirmadosComponent', () => {
  let component: ConvidadosConfirmadosComponent;
  let fixture: ComponentFixture<ConvidadosConfirmadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvidadosConfirmadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvidadosConfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
