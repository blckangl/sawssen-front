import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferMouleComponent } from './offer-moule.component';

describe('OfferMouleComponent', () => {
  let component: OfferMouleComponent;
  let fixture: ComponentFixture<OfferMouleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferMouleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferMouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
