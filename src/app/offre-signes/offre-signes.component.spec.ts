import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreSignesComponent } from './offre-signes.component';

describe('OffreSignesComponent', () => {
  let component: OffreSignesComponent;
  let fixture: ComponentFixture<OffreSignesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreSignesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreSignesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
