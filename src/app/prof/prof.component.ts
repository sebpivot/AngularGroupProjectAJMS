import {Component, Input, OnInit} from '@angular/core';
import {TeacherService} from '../services/teacher.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  @Input() teacherFirstname;
  @Input() teacherLastname;
  @Input() index;
  @Input() teacherId;

  teachers: any[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
  }

}
