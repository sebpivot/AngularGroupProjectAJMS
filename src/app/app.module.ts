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

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent},
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'studentList', component: StudentListViewComponent},
  { path: 'students/:id', component: StudentDetailsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    StudentListViewComponent,
    StudentDetailsComponent
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
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
