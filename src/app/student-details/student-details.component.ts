import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  firstname = 'Prenom';
  lastname = 'Nom';

  constructor(private studentService: StudentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.firstname = this.studentService.getStudentById(+id).firstname;
    this.lastname = this.studentService.getStudentById(+id).lastname;

  }

}
