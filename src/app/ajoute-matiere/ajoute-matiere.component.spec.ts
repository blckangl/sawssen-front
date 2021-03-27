import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteMatiereComponent } from './ajoute-matiere.component';

describe('AjouteMatiereComponent', () => {
  let component: AjouteMatiereComponent;
  let fixture: ComponentFixture<AjouteMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
