import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";

// @ts-ignore
@Injectable()
export class CourseService {
  private baseUrl = 'http://localhost:8080/gestion_ects/api/courses';

  constructor(private http: HttpClient) {
  }

  getCourse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  createCourse(course: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/teachers/1`, course);
  }

  updateCourse(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getCoursesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
