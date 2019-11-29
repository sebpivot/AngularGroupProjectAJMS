import { Component, OnInit } from '@angular/core';
import {TeacherService} from '../services/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Teacher} from '../model/Teacher';
import {Course} from '../model/Course';
import {Observable} from 'rxjs';
import {Student} from '../model/Student';
import {StudentService} from '../services/student.service';
import {CourseService} from '../services/course.service';


@Component({
  selector: 'app-prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css']
})
export class ProfDetailsComponent implements OnInit {

 id: number;
 teacher: Teacher;
  courses: Observable<Course[]>;
  students: Observable<Student[]>;
  routerLink: any;


  constructor(private courseService: CourseService,
              private teacherService: TeacherService,
              private router: Router,
              private route: ActivatedRoute,
              private studentService: StudentService) { }

  ngOnInit() {
    this.reloadData();
    this.teacher = new Teacher();

    this.id = this.route.snapshot.params.id;

    this.teacherService.getTeacher(this.id)
      .subscribe(data => {
      console.log(data);
      this.teacher = data;
    }, error => console.log(error));
}

  list() {
    this.router.navigate(['teachers']);
  }

  getStudent(id: any) {
    this.studentService.getNewStudentsList()
      .subscribe(data => {
        console.log(data);
        this.teacher = data;
      }, error => console.log(error));
  }

  addCourse(id: number) {
    this.router.navigate(['teachers', id, 'addCourses']);
  }

  reloadData() {
    this.courses = this.courseService.getCoursesList();
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id)
      .subscribe(
        data => {
          console.log(data);
          this.ngOnInit();
          /*this.router.navigate(['teachers', this.teacher.id]);*/
        },
        error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/teachers', this.id]);
  }
}
