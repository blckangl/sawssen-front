import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFamiliyComponent } from './detail-familiy.component';

describe('DetailFamiliyComponent', () => {
  let component: DetailFamiliyComponent;
  let fixture: ComponentFixture<DetailFamiliyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFamiliyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFamiliyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
