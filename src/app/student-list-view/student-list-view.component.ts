import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../services/course.service';
import {Student} from '../model/Student';
import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

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

  students: Student[];
  filterStudentFirstName: string;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.studentService.getStudentsList().subscribe(listOfStudents => {
      this.students = listOfStudents;
    });
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
@Pipe({name: 'filterStudentByFirstName'})
export class FilterStudents implements PipeTransform {
  transform(listOfStudents: Student[], studentFirstNameToFilter: string): Student[] {
    if (!listOfStudents) { return null; }
    if (!studentFirstNameToFilter) { return listOfStudents; }
    return listOfStudents.filter(s => _.deburr(s.firstName.toLowerCase()).includes(_.deburr(studentFirstNameToFilter.toLowerCase())));
  }
}
