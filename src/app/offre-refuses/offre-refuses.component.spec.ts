import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreRefusesComponent } from './offre-refuses.component';

describe('OffreRefusesComponent', () => {
  let component: OffreRefusesComponent;
  let fixture: ComponentFixture<OffreRefusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreRefusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreRefusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
