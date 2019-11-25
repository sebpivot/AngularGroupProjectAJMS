import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs";
import {Course} from "../model/Course";

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

  courses: Observable<Course[]>;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.courses = this.courseService.getCoursesList();
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
