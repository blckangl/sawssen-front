import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonExportComponent } from './boutton-export.component';

describe('BouttonExportComponent', () => {
  let component: BouttonExportComponent;
  let fixture: ComponentFixture<BouttonExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouttonExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouttonExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
