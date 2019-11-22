import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CourseService {

    coursesSubject = new Subject<any[]>();

  private courses = [
    {
      id: 1,
      name: 'Math',
      credit: '25',
    },
    {
      id: 2,
      name: 'French',
      credit: '50',
    },
  ];


    constructor(private httpClient: HttpClient) { }



  getCourseById(id: number) {
    const course = this.courses.find(
      (c) => {
        return c.id === id;
      }
    );
    return course;
  }

   getCoursesFromServer() {
      this.httpClient
        .get<any[]>('https://localhost8080/gestion_ects/courses')
        .subscribe(
          (response) => {
            this.courses = response;
            this.emitCoursesSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

  private emitCoursesSubject() {

  }
}
