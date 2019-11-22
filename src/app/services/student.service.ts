import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {CourseService} from './course.service';
import {CourseComponent} from '../course/course.component';
/*import {HttpClient} from '@angular/common/http';*/

// @ts-ignore
@Injectable()
export class StudentService {

  /*

    appareilsSubject = new Subject<any[]>();
  */

  students = [
    {
      id: 1,
      firstname: 'Julia',
      lastname: 'Gayral',
      courses: [this.courseService.courses[0], this.courseService.getCourseById(2)],
      status: 'Non validated'
    },
    {
      id: 2,
      firstname: 'Sebastien',
      lastname: 'Pivot',
      courses: [this.courseService.getCourseById(1)],
      status: 'Validated',
    },
  ];

  /*

    constructor(private httpClient: HttpClient) { }
  */
  constructor(private courseService: CourseService) {
  }

  getStudentById(id: number) {
    const student = this.students.find(
      (s) => {
        return s.id === id;
      }
    );
    return student;
  }

  /*  saveAppareilsToServer() {
      this.httpClient
        .post('https://httpclient-demo.firebaseio.com/appareils.json', this.appareils)
        .subscribe(
          () => {
            console.log('Enregistrement terminé !');
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }*/
}
