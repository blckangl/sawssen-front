import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonCreateOfferComponent } from './boutton-create-offer.component';

describe('BouttonCreateOfferComponent', () => {
  let component: BouttonCreateOfferComponent;
  let fixture: ComponentFixture<BouttonCreateOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouttonCreateOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouttonCreateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
