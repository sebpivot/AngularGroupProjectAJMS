import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
/*import {HttpClient} from '@angular/common/http';*/

/*// @ts-ignore
@Injectable*/
export class AppareilService {
/*

  appareilsSubject = new Subject<any[]>();
*/

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
/*

  constructor(private httpClient: HttpClient) { }
*/

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
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
