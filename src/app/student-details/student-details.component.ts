import { Component, OnInit } from '@angular/core';
import {Teacher} from "../model/Teacher";
import {Observable} from "rxjs";
import {Course} from "../model/Course";
import {TeacherService} from "../services/teacher.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../model/Student";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id: number;
  student: Student;
  students: Observable<Student[]>;
  course: Course;
  courses: Course[];
  sum: number;


  constructor(private studentService: StudentService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.student = new Student();

    this.id = this.route.snapshot.params.id;

    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data);
        this.student = data;
      }, error => console.log(error));
  }


  list() {
    this.router.navigate(['students']);
  }

  getTotal() {
    this.courses = this.student.coursesDto;
    this.sum = 0;
    for (let i = 0; i < this.courses.length; i++) {
      if (this.student.validations[i] === true) {
        this.sum += this.courses[i].ects;
      }
    }
    return this.sum;
  }
}
