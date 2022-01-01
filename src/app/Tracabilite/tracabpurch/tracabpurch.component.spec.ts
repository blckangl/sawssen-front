import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracabpurchComponent } from './tracabpurch.component';

describe('TracabpurchComponent', () => {
  let component: TracabpurchComponent;
  let fixture: ComponentFixture<TracabpurchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracabpurchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracabpurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
