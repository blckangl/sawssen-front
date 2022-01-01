import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEtudeComponent } from './all-etude.component';

describe('AllEtudeComponent', () => {
  let component: AllEtudeComponent;
  let fixture: ComponentFixture<AllEtudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEtudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEtudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
