import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfListViewComponent } from './prof-list-view.component';

describe('ProfListViewComponent', () => {
  let component: ProfListViewComponent;
  let fixture: ComponentFixture<ProfListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
