import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevisEssaiComponent } from './edit-devis-essai.component';

describe('EditDevisEssaiComponent', () => {
  let component: EditDevisEssaiComponent;
  let fixture: ComponentFixture<EditDevisEssaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDevisEssaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDevisEssaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
