import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRefuseOffreFinaliseComponent } from './btn-refuse-offre-finalise.component';

describe('BtnRefuseOffreFinaliseComponent', () => {
  let component: BtnRefuseOffreFinaliseComponent;
  let fixture: ComponentFixture<BtnRefuseOffreFinaliseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnRefuseOffreFinaliseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRefuseOffreFinaliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
