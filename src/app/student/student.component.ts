import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() studentFirstname;
  @Input() studentLastname;
  @Input() studentStatus;
  @Input() studentCourses;
  @Input() index;
  @Input() studentId;

  students: any[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {

  }

  getStatus() {
    return this.studentStatus;
  }

  getColor() {
    if (this.studentStatus === 'Validé') {
      return 'green';
    } else if (this.studentStatus === 'Non validé') {
      return 'red';
    }
  }
}
