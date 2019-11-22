import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CourseService} from '../services/course.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(private courseService: CourseService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const credit = form.value.credit;
    this.courseService.addCourse(name, credit);
    this.router.navigate(['/courses']);

  }

}
