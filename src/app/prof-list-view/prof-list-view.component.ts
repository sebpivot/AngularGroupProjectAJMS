import {Component, Input, OnInit} from '@angular/core';
import {TeacherService} from '../services/teacher.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prof-list-view',
  templateUrl: './prof-list-view.component.html',
  styleUrls: ['./prof-list-view.component.css']
})
export class ProfListViewComponent implements OnInit {

  @Input() teacherFirstname;
  @Input() teacherLastname;
  @Input() index;
  @Input() teacherId;

  teachers: any[];

  constructor(private teacherService: TeacherService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.teachers = this.teacherService.teachers;
  }

}
