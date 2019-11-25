import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class TeacherService {
  private baseUrl = 'http://localhost:8080/gestion_ects/api/teachers';

  constructor(private http: HttpClient) {
  }

  getTeacher(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
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
