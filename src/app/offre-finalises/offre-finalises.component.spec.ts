import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreFinalisesComponent } from './offre-finalises.component';

describe('OffreFinalisesComponent', () => {
  let component: OffreFinalisesComponent;
  let fixture: ComponentFixture<OffreFinalisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreFinalisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreFinalisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
