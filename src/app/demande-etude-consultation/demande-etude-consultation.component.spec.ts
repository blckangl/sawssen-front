import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEtudeConsultationComponent } from './demande-etude-consultation.component';

describe('DemandeEtudeConsultationComponent', () => {
  let component: DemandeEtudeConsultationComponent;
  let fixture: ComponentFixture<DemandeEtudeConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeEtudeConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeEtudeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
