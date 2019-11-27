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
  sId: number;
  student: Student;
  cId: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private studentService: StudentService) { }

  ngOnInit() {
    this.student= new Student();
    this.sId=this.route.snapshot.params.sId;
    this.cId= this.route.snapshot.params.cId;
    this.studentService.getStudent(this.sId)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
    this.updateCourse();
  }

  onSubmit() {
    this.updateCourse();
  }

  private updateCourse() {
    this.studentService.patchStudent(this.sId,this.cId, this.student)
      .subscribe(data => {
        console.log(data);
        this.gotoList();
      }, error => console.log(error));
  }
  private gotoList() {
    this.router.navigate(['/students/courses/'+this.cId]);
  }
}
