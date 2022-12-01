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
import { AddFriendComponent } from './add-friend/add-friend.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewCourseComponent } from './view-course/view-course.component'

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
  },
  {
    path:"addfriend",
    component:AddFriendComponent
  },
  {
    path:"viewcourse",
    component:ViewCourseComponent
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
    AddCourseComponent,
    AddFriendComponent,
    EmployeeNavbarComponent,
    ViewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
