import { Component, Input, OnInit } from '@angular/core';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() courseName;
  @Input() courseCredit;
  @Input() courseId;
  courses: any[];

  constructor(private courseService: CourseService ) { }

  ngOnInit() {
  }

}
