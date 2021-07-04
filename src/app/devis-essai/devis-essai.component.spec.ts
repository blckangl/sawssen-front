import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisEssaiComponent } from './devis-essai.component';

describe('DevisEssaiComponent', () => {
  let component: DevisEssaiComponent;
  let fixture: ComponentFixture<DevisEssaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevisEssaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisEssaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
