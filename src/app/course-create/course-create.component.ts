import {Component, OnInit} from '@angular/core';
import {Course} from "../model/Course";
import {CourseService} from "../services/course.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  course: Course = new Course();
  submitted = false;
  idTeacher: number;

  constructor(private courseService: CourseService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  newCourse(): void {
    this.submitted = false;
    this.course = new Course();
  }

  save() {
    this.idTeacher = this.route.snapshot.params.id;
    this.courseService.createCourse(this.course, this.idTeacher)
      .subscribe(data => console.log(data), error => console.log(error));
    this.course = new Course();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/courses']);
  }
}

