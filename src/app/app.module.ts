import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
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
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseComponent } from './course/course.component';
import {CourseService} from './services/course.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseCreateComponent } from './course-create/course-create.component';
import { CourseUpdateComponent } from './course-update/course-update.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { ProfUpdateComponent } from './prof-update/prof-update.component';

const appRoutes: Routes = [

  { path: 'students', component: StudentListViewComponent},
  { path: 'students/:id', component: StudentDetailsComponent},
  { path: 'teachers', component: ProfListViewComponent},
  { path: 'teachers/:id', component: ProfDetailsComponent},
  { path: 'main', component: MainPageComponent},
  { path: 'courses', component: CoursesListComponent},
  { path: 'teachers/:id/addCourses', component: CourseCreateComponent},
/*  { path: 'addCourses', component: CourseCreateComponent},*/
  { path: 'updateCourses/:id', component: CourseUpdateComponent },
/*  { path: 'teachers/:id/students', component: }*/
  { path: '', component: MainPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    StudentListViewComponent,
    StudentDetailsComponent,
    ProfListViewComponent,
    ProfDetailsComponent,
    ProfComponent,
    MainPageComponent,
    StudentComponent,
    CoursesListComponent,
    CourseComponent,
    CourseDetailComponent,
    CourseComponent,
    CourseCreateComponent,
    CourseUpdateComponent,
    StudentUpdateComponent,
    ProfUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [
    StudentService,
    CourseService,
    TeacherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
