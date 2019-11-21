import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../services/teacher.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css']
})
export class ProfDetailsComponent implements OnInit {

  teacherFirstname = 'Prenom';
  teacherLastname = 'Nom';

  constructor(private teacherService: TeacherService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.teacherFirstname = this.teacherService.getTeacherById(+id).Firstname;
    this.teacherLastname = this.teacherService.getTeacherById(+id).Lastname;
  }

}
