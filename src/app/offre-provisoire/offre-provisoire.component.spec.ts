import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreProvisoireComponent } from './offre-provisoire.component';

describe('OffreProvisoireComponent', () => {
  let component: OffreProvisoireComponent;
  let fixture: ComponentFixture<OffreProvisoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreProvisoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreProvisoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
