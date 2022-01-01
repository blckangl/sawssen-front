import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracabiliteSalesComponent } from './tracabilite-sales.component';

describe('TracabiliteSalesComponent', () => {
  let component: TracabiliteSalesComponent;
  let fixture: ComponentFixture<TracabiliteSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracabiliteSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracabiliteSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
