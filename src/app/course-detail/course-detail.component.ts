import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() courseName;
  @Input() courseCredit;
  @Input() courseId;
  @Input() index;
  courses: any[];

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit() {
    /*const id = this.route.snapshot.params.id;
    this.courseName = this.courseService.getCourseById(+id).name;
    this.courseCredit = this.courseService.getCourseById(+id).credit;*/
  }

}
