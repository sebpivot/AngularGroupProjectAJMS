import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListOfThisCourseComponent } from './student-list-of-this-course.component';

describe('StudentListOfThisCourseComponent', () => {
  let component: StudentListOfThisCourseComponent;
  let fixture: ComponentFixture<StudentListOfThisCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListOfThisCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListOfThisCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
