import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Course} from "../model/Course";

// @ts-ignore
@Injectable()
export class CourseService {
  private baseUrl = 'http://localhost:8080/gestion_ects/api/courses';

  constructor(private http: HttpClient) {
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  createCourse(course: Object, id: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/teachers/${id}`, course);
  }

  updateCourse(id: number, value: any): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/${id}`, value);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getCoursesList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
}
