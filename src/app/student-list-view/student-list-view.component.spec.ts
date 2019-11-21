import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListViewComponent } from './student-list-view.component';

describe('StudentListViewComponent', () => {
  let component: StudentListViewComponent;
  let fixture: ComponentFixture<StudentListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
