import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOffreEssaiComponent } from './edit-offre-essai.component';

describe('EditOffreEssaiComponent', () => {
  let component: EditOffreEssaiComponent;
  let fixture: ComponentFixture<EditOffreEssaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOffreEssaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOffreEssaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
