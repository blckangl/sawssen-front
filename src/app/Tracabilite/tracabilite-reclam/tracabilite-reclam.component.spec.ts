import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracabiliteReclamComponent } from './tracabilite-reclam.component';

describe('TracabiliteReclamComponent', () => {
  let component: TracabiliteReclamComponent;
  let fixture: ComponentFixture<TracabiliteReclamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracabiliteReclamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracabiliteReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
