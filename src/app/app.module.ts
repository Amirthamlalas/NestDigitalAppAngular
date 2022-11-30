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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
