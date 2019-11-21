import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
/*import {HttpClient} from '@angular/common/http';*/

/*// @ts-ignore
@Injectable*/
export class TeacherService {

  /*

    appareilsSubject = new Subject<any[]>();
  */

  teachers = [
    {
      id: 1,
      teacherFirstname: 'Boris',
      teacherLastname: 'Sauvage',
    },
    {
      id: 2,
      teacherFirstname: 'Attif',
      teacherLastname: 'Dad',
    },
  ];

  /*

    constructor(private httpClient: HttpClient) { }
  */


  getTeacherById(id: number) {
    const teacher = this.teachers.find(
      (s) => {
        return s.id === id;
      }
    );
    return teacher;
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
