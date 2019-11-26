import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from "../services/course.service";
import {Observable} from "rxjs";
import {Student} from "../model/Student";

@Component({
  selector: 'app-student-list-view',
  templateUrl: './student-list-view.component.html',
  styleUrls: ['./student-list-view.component.css']
})
export class StudentListViewComponent implements OnInit {

  @Input() studentFirstname;
  @Input() studentLastname;
  @Input() studentisAccepted;
  @Input() index;
  @Input() studentId;

  students: Observable<Student[]>;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.studentService.getStudentsList();
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  getStudent(id: number) {
    this.studentService.getStudent(id)
      .subscribe(
        data => {
          console.log(data);
          /*this.reloadData();*/
        },
        error => console.log(error));
  }
}
