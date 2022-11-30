import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {


  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""
constructor(private api:ApiService){}

  addCourse=()=>{
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDate":this.courseDate,"courseDuration":this.courseDuration,"courseVenue":this.courseVenue}
      console.log(data)
      this.api.addCourse(data).subscribe(
        (response:any)=>{
          if (response.status=="success") {
            alert("course added succesfully")
            this.courseTitle=""
            this.courseDescription=""
            this.courseDate=""
            this.courseDuration=""
            this.courseVenue=""

            
          } else {

            alert("something went wrong")
          }
        }
      )
  }
}
