import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulerSingComponent } from './annuler-sing.component';

describe('AnnulerSingComponent', () => {
  let component: AnnulerSingComponent;
  let fixture: ComponentFixture<AnnulerSingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnulerSingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnulerSingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
