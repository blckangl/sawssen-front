import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutQuotationMouleComponent } from './ajout-quotation-moule.component';

describe('AjoutQuotationMouleComponent', () => {
  let component: AjoutQuotationMouleComponent;
  let fixture: ComponentFixture<AjoutQuotationMouleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutQuotationMouleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutQuotationMouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
