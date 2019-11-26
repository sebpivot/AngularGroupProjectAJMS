import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../services/student.service";
import {Student} from "../model/Student";
import {Course} from "../model/Course";

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  id: number;
  student: Student;

  constructor(private route: ActivatedRoute, private router: Router,
              private studentService: StudentService) { }

  ngOnInit() {
    this.student= new Student();
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCourse();
  }

  private updateCourse() {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.gotoList();
  }

  private gotoList() {
    this.router.navigate(['/courses']);
  }
}
