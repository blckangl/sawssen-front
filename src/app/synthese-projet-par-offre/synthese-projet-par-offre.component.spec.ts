import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseProjetParOffreComponent } from './synthese-projet-par-offre.component';

describe('SyntheseProjetParOffreComponent', () => {
  let component: SyntheseProjetParOffreComponent;
  let fixture: ComponentFixture<SyntheseProjetParOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheseProjetParOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheseProjetParOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
