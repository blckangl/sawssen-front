import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportdevisComponent } from './exportdevis.component';

describe('ExportdevisComponent', () => {
  let component: ExportdevisComponent;
  let fixture: ComponentFixture<ExportdevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportdevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
