import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CourseService {

    courseSubject = new Subject<any[]>();

  courses = [
    {
      id: 1,
      name: 'Math',
      credit: 25,
    },
    {
      id: 2,
      name: 'French',
      credit: 50,
    },
  ];

  emitCourseSubject() {
    this.courseSubject.next(this.courses.slice());
  }


    constructor(private httpClient: HttpClient) { }



  getCourseById(id: number) {
    const course = this.courses.find(
      (c) => {
        return c.id === id;
      }
    );
    return course;
  }


  // tslint:disable-next-line:variable-name
  addCourse(name: string, credit: string) {
    const courseObject = {
      id: 0,
      name: '',
      credit: ''
    };
    courseObject.name = name;
    // @ts-ignore
    courseObject.credit = credit;
    courseObject.id = this.courses[(this.courses.length - 1)].id + 1;
    // @ts-ignore
    this.courses.push(courseObject);
    this.emitCourseSubject();
  }

  getCoursesFromServer() {
      this.httpClient
        .get<any[]>('https://localhost8080/gestion_ects/courses')
        .subscribe(
          (response) => {
            this.courses = response;
            this.emitCourseSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

  private emitCourseSubject() {

  }
}
