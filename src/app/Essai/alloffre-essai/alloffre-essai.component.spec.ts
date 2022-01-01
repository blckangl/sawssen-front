import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloffreEssaiComponent } from './alloffre-essai.component';

describe('AlloffreEssaiComponent', () => {
  let component: AlloffreEssaiComponent;
  let fixture: ComponentFixture<AlloffreEssaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlloffreEssaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlloffreEssaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
