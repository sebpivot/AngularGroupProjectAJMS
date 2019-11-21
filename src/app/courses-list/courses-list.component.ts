import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @Input() courseName;
  @Input() courseCredit;
  @Input() index;
  @Input() courseId;

  courses: any[];

  constructor(private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.courses = this.courseService.courses;
  }

}
