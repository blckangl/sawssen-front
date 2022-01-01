import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExquiseComponent } from './all-exquise.component';

describe('AllExquiseComponent', () => {
  let component: AllExquiseComponent;
  let fixture: ComponentFixture<AllExquiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExquiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExquiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
