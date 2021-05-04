import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFinaliserComponent } from './btn-finaliser.component';

describe('BtnFinaliserComponent', () => {
  let component: BtnFinaliserComponent;
  let fixture: ComponentFixture<BtnFinaliserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnFinaliserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFinaliserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
