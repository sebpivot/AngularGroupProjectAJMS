import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private studentService: StudentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.students = this.studentService.students;
  }

}
