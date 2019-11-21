import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() studentFirstname;
  @Input() studentLastname;
  @Input() studentStatus;
  @Input() index;
  @Input() studentId;

  constructor() { }

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
