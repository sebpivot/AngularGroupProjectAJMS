import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../model/Teacher";
import {Student} from "../model/Student";

@Injectable()
export class TeacherService {
  private baseUrl = 'http://localhost:8080/gestion_ects/api/teachers';

  constructor(private http: HttpClient) {
  }

  getTeacher(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`)
  }

  createTeacher(teacher: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, teacher);
  }

  updateTeacher(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getTeachersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
