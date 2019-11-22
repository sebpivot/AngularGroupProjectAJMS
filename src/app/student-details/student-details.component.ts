import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentFirstname;
  studentLastname;
  studentStatus;
  studentCourses ;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.studentFirstname = this.studentService.getStudentById(+id).firstname;
    this.studentLastname = this.studentService.getStudentById(+id).lastname;
    this.studentStatus = this.studentService.getStudentById(+id).status;
    this.studentCourses = this.studentService.getStudentById(+id).courses;
  }

}
