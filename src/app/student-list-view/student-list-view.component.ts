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
    const  id = this.route.snapshot.params.id;
    this.studentFirstname = this.studentService.getStudentById(+id).firstname;
    this.studentLastname = this.studentService.getStudentById(+id).lastname;
    this.studentStatus = this.studentService.getStudentById(+id).status;
  }

}
