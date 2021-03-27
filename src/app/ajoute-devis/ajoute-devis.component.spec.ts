import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteDevisComponent } from './ajoute-devis.component';

describe('AjouteDevisComponent', () => {
  let component: AjouteDevisComponent;
  let fixture: ComponentFixture<AjouteDevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteDevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
