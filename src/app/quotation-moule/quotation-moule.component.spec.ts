import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationMouleComponent } from './quotation-moule.component';

describe('QuotationMouleComponent', () => {
  let component: QuotationMouleComponent;
  let fixture: ComponentFixture<QuotationMouleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationMouleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationMouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
