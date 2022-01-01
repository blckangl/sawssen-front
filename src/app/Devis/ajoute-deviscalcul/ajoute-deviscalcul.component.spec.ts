import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteDeviscalculComponent } from './ajoute-deviscalcul.component';

describe('AjouteDeviscalculComponent', () => {
  let component: AjouteDeviscalculComponent;
  let fixture: ComponentFixture<AjouteDeviscalculComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteDeviscalculComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteDeviscalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
