import { Component } from '@angular/core';

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


  addCourse=()=>{
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDate":this.courseDate,"courseDuration":this.courseDuration,"courseVenue":this.courseVenue}
      console.log(data)
  }
}
