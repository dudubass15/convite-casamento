import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConviteComponent } from './card-convite.component';

describe('CardConviteComponent', () => {
  let component: CardConviteComponent;
  let fixture: ComponentFixture<CardConviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardConviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardConviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
