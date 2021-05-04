import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOffreMouleComponent } from './ajout-offre-moule.component';

describe('AjoutOffreMouleComponent', () => {
  let component: AjoutOffreMouleComponent;
  let fixture: ComponentFixture<AjoutOffreMouleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutOffreMouleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOffreMouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
