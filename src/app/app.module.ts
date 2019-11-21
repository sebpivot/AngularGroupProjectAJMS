import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {StudentService} from './services/student.service';
import { StudentListViewComponent } from './student-list-view/student-list-view.component';
import { StudentComponent } from './student/student.component';
import { ProfListViewComponent } from './prof-list-view/prof-list-view.component';
import {TeacherService} from './services/teacher.service';
import { ProfDetailsComponent } from './prof-details/prof-details.component';
import { ProfComponent } from './prof/prof.component';
import { MainPageComponent } from './main-page/main-page.component';

const appRoutes: Routes = [

  { path: 'auth', component: AuthComponent },
  { path: 'students', component: StudentListViewComponent},
  { path: 'students/:id', component: StudentDetailsComponent},
  { path: 'studentList', component: StudentListViewComponent},
  { path: 'students/:id', component: StudentDetailsComponent},
  { path: 'teachers', component: ProfListViewComponent},
  { path: 'teachers/:id', component: ProfDetailsComponent},
  { path: 'main', component: MainPageComponent},
  { path: '', component: MainPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    StudentListViewComponent,
    StudentDetailsComponent,
    ProfListViewComponent,
    ProfDetailsComponent,
    ProfComponent,
    MainPageComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
/*    HttpClientModule*/
  ],
  providers: [
    AuthService,
    StudentService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
