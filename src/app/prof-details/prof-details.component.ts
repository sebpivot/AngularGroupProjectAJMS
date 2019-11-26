import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../services/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Teacher} from '../model/Teacher';
import {Course} from '../model/Course';
import {Observable} from 'rxjs';
import {Student} from '../model/Student';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css']
})
export class ProfDetailsComponent implements OnInit {

 id: number;
 teacher: Teacher;
  courses: Observable<Course[]>;
  studentService: StudentService;


  constructor(private teacherService: TeacherService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.teacher = new Teacher();

    this.id = this.route.snapshot.params.id;

    this.teacherService.getTeacher(this.id)
      .subscribe(data => {
      console.log(data);
      this.teacher = data;
    }, error => console.log(error));
}

  list() {
    this.router.navigate(['teachers']);
  }
}
