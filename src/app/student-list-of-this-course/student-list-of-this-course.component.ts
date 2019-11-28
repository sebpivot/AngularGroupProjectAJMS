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
  cId: number;
  course: Course;
  students: Student[];

  constructor(private studentService: StudentService,
              private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  list() {
    this.router.navigate(['teachers']);
  }

  ngOnInit() {
    this.reloadData();
  }

  private reloadData() {
    this.cId = this.route.snapshot.params.id;
    this.studentService.getStudentsOfCourse1(this.cId)
      .subscribe(data => {
        console.log(data);
        this.students = data;
      }, error => console.log(error));
  }

  updateStudent(id: number) {
    this.router.navigate(['students', id , 'courses' , this.cId]);
  }
}
