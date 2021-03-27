import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudeFaiComponent } from './etude-fai.component';

describe('EtudeFaiComponent', () => {
  let component: EtudeFaiComponent;
  let fixture: ComponentFixture<EtudeFaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudeFaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudeFaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
