import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldevismoldComponent } from './alldevismold.component';

describe('AlldevismoldComponent', () => {
  let component: AlldevismoldComponent;
  let fixture: ComponentFixture<AlldevismoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldevismoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldevismoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
