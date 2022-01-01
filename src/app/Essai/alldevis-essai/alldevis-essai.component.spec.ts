import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldevisEssaiComponent } from './alldevis-essai.component';

describe('AlldevisEssaiComponent', () => {
  let component: AlldevisEssaiComponent;
  let fixture: ComponentFixture<AlldevisEssaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldevisEssaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldevisEssaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
