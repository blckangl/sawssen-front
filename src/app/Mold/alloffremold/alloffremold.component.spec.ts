import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloffremoldComponent } from './alloffremold.component';

describe('AlloffremoldComponent', () => {
  let component: AlloffremoldComponent;
  let fixture: ComponentFixture<AlloffremoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlloffremoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlloffremoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
