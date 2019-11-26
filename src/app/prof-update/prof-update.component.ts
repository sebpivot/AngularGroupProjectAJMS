import { Component, OnInit } from '@angular/core';
import {Teacher} from "../model/Teacher";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../services/student.service";
import {TeacherService} from "../services/teacher.service";
import {Student} from "../model/Student";

@Component({
  selector: 'app-prof-update',
  templateUrl: './prof-update.component.html',
  styleUrls: ['./prof-update.component.css']
})
export class ProfUpdateComponent implements OnInit {
  id: number;
  teacher: Teacher;

  constructor(private route: ActivatedRoute, private router: Router,
              private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacher= new Teacher();
    this.id=this.route.snapshot.params['id'];
    this.teacherService.getTeacher(this.id)
      .subscribe(data => {
        console.log(data)
        this.teacher = data;
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateTeacher();
  }

  private updateTeacher() {
    this.teacherService.updateTeacher(this.id, this.teacher)
      .subscribe(data => console.log(data), error => console.log(error));
    this.teacher = new Teacher();
    this.gotoList();
  }

  private gotoList() {
    this.router.navigate(['/teachers']);
  }
}
