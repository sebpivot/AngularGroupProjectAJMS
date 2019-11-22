import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
/*import {HttpClient} from '@angular/common/http';*/

// @ts-ignore
@Injectable()
export class CourseService {

  /*

    appareilsSubject = new Subject<any[]>();
  */

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

  /*

    constructor(private httpClient: HttpClient) { }
  */


  getCourseById(id: number) {
    const course = this.courses.find(
      (c) => {
        return c.id === id;
      }
    );
    return course;
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
