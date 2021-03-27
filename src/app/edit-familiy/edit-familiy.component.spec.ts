import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFamiliyComponent } from './edit-familiy.component';

describe('EditFamiliyComponent', () => {
  let component: EditFamiliyComponent;
  let fixture: ComponentFixture<EditFamiliyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFamiliyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFamiliyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
