import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailclietnComponent } from './detailclietn.component';

describe('DetailclietnComponent', () => {
  let component: DetailclietnComponent;
  let fixture: ComponentFixture<DetailclietnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailclietnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailclietnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
