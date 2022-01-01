import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDemandeconComponent } from './all-demandecon.component';

describe('AllDemandeconComponent', () => {
  let component: AllDemandeconComponent;
  let fixture: ComponentFixture<AllDemandeconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDemandeconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDemandeconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
