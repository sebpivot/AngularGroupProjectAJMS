import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/Student';

// @ts-ignore
@Injectable()
export class StudentService {
  private baseUrl = 'http://localhost:8080/gestion_ects/api/students';
  private id: any;
  constructor(private http: HttpClient) {
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/${id}`);
  }

  createStudent(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  patchStudent(sId: number, cId: number, value: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${sId}/courses/${cId}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getStudentsList(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }
  getStudentsOfCourse1(cId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/courses/${cId}`);
  }

  getNewStudentsList(): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let id;
    return this.http.get(`${this.baseUrl}/${id}/students`);
  }
}
