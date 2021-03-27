import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteManagerComponent } from './ajoute-manager.component';

describe('AjouteManagerComponent', () => {
  let component: AjouteManagerComponent;
  let fixture: ComponentFixture<AjouteManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
