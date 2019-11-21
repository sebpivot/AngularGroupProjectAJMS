import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-list-view',
  templateUrl: './student-list-view.component.html',
  styleUrls: ['./student-list-view.component.css']
})
export class StudentListViewComponent implements OnInit {

  @Input() studentFirstname;
  @Input() studentLastname;
  @Input() studentStatus;
  @Input() index;
  @Input() studentId;

  students: any[];

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
