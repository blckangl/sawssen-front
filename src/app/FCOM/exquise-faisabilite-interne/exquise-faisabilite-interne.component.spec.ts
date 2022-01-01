import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExquiseFaisabiliteInterneComponent } from './exquise-faisabilite-interne.component';

describe('ExquiseFaisabiliteInterneComponent', () => {
  let component: ExquiseFaisabiliteInterneComponent;
  let fixture: ComponentFixture<ExquiseFaisabiliteInterneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExquiseFaisabiliteInterneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExquiseFaisabiliteInterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
