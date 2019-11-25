import {Component, Input, OnInit} from '@angular/core';
import {TeacherService} from '../services/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs";
import {Teacher} from "../model/Teacher";
import {Course} from '../model/Course';

@Component({
  selector: 'app-prof-list-view',
  templateUrl: './prof-list-view.component.html',
  styleUrls: ['./prof-list-view.component.css']
})
export class ProfListViewComponent implements OnInit {

  @Input() teacherFirstname;
  @Input() teacherLastname;
  @Input() teacherEmail;
  @Input() index;
  @Input() teacherId;

  teachers: Observable<Teacher[]>;
  courses: Observable<Course[]>;

  constructor(private teacherService: TeacherService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.teachers = this.teacherService.getTeachersList();
  }

  deleteTeacher(id: number) {
    this.teacherService.deleteTeacher(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  teacherDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
