import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../model/Student";
import {StudentService} from "../services/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Course} from "../model/Course";
import {CourseService} from "../services/course.service";
import {Students} from "../model/Students";

@Component({
  selector: 'app-student-list-of-this-course',
  templateUrl: './student-list-of-this-course.component.html',
  styleUrls: ['./student-list-of-this-course.component.css']
})
export class StudentListOfThisCourseComponent implements OnInit {
  idCourse: number;
  course: Course;
  students: Observable<Student[]>;
  studentsTest: Students;

  constructor(private studentService: StudentService,
              private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  private reloadData() {
    this.studentsTest= new Students();
    this.idCourse = this.route.snapshot.params.id;
    this.studentService.getStudentsOfCourse1(this.idCourse)
      .subscribe(data => {
        console.log(data);
        this.studentsTest = data;
      }, error => console.log(error));
  }
}
