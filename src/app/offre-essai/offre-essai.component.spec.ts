import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreEssaiComponent } from './offre-essai.component';

describe('OffreEssaiComponent', () => {
  let component: OffreEssaiComponent;
  let fixture: ComponentFixture<OffreEssaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffreEssaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreEssaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
