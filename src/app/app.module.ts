import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalaryComponent } from './galary/galary.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { AddCourseComponent } from './add-course/add-course.component';

const myroute:Routes=[
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"galary",
    component:GalaryComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"employee",
    component:EmployeeComponent
  },
  {
    path:"newemployee",
    component:EmployeeRegisterComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    GalaryComponent,
    ContactComponent,
    AboutComponent,
    AdminComponent,
    EmployeeComponent,
    EmployeeRegisterComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
