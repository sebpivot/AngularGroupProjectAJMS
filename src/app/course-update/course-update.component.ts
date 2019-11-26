import {Component, OnInit} from '@angular/core';
import {Course} from "../model/Course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../services/course.service";
import {error} from "util";

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  id: number;
  course: Course;

  constructor(private route: ActivatedRoute, private router: Router,
              private courseService: CourseService) {  }

  ngOnInit() {
    this.course= new Course();
    this.id=this.route.snapshot.params['id'];
    this.courseService.getCourse(this.id)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));
  }
  updateCourse() {
    this.courseService.updateCourse(this.id, this.course)
      .subscribe(data => console.log(data), error => console.log(error));
    this.course = new Course();
    this.gotoList();
  }
  onSubmit() {
    this.updateCourse();
  }

  gotoList() {
    this.router.navigate(['/courses']);
  }
}
