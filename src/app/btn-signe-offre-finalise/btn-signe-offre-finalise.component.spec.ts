import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSigneOffreFinaliseComponent } from './btn-signe-offre-finalise.component';

describe('BtnSigneOffreFinaliseComponent', () => {
  let component: BtnSigneOffreFinaliseComponent;
  let fixture: ComponentFixture<BtnSigneOffreFinaliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnSigneOffreFinaliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSigneOffreFinaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
