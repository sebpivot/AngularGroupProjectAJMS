import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
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
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'students', component: StudentListViewComponent},
  { path: 'students/:id', component: StudentDetailsComponent},
/*  { path: '', component: AppareilViewComponent },*/
  { path: 'studentList', component: StudentListViewComponent},
  { path: 'students/:id', component: StudentDetailsComponent},
  { path: 'teachers', component: ProfListViewComponent},
  { path: 'teachers/:id', component: ProfDetailsComponent},
  { path: '', component: MainPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
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
    AppareilService,
    AuthService,
    StudentService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
