import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
/*import {HttpClient} from '@angular/common/http';*/

/*// @ts-ignore
@Injectable*/
export class StudentService {

  /*

    appareilsSubject = new Subject<any[]>();
  */

  students = [
    {
      id: 1,
      firstname: 'Julia',
      lastname: 'Gayral',
      status: 'Non validé'
    },
    {
      id: 2,
      firstname: 'Sebastien',
      lastname: 'Pivot',
      status: 'Validé',
    },
  ];

  /*

    constructor(private httpClient: HttpClient) { }
  */


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
