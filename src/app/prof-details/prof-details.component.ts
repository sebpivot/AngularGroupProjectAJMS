import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../services/teacher.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Teacher} from '../model/Teacher';
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
  students: Observable<Student[]>;

  constructor(private courseService: CourseService,
              private teacherService: TeacherService,
              private router: Router,
              private route: ActivatedRoute,
              private studentService: StudentService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.teacherService.getTeacher(this.id)
      .subscribe(data => {
        this.teacher = data;
      }, error => console.log(error));
  }

  goToTeacherlist() {
    this.router.navigate(['teachers']);
  }

  goToAddCourse(id: number) {
    this.router.navigate(['teachers', id, 'addCourses']);
  }

  deleteCourse(courseId: number) {
    this.courseService.deleteCourse(courseId)
      .subscribe(data => {
          this.teacher.coursesDto = this.teacher.coursesDto.filter(course => course.id !== courseId);
        },
        error => console.log(error));

  }

  gotoList() {
    this.router.navigate(['/teachers', this.id]);
  }

  goToShowCourse(courseId: number) {
    this.router.navigate(['/students/courses/', courseId]);
  }
}
