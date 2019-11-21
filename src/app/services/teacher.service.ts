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
      Firstname: 'Boris',
      Lastname: 'Sauvage',
    },
    {
      id: 2,
      Firstname: 'Attif',
      Lastname: 'Dad',
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
