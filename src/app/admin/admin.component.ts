import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  username=""
  password=""
constructor(private route:Router){}
  readValue=()=>{
  let data:any={"username":this.username,"password":this.password}
  console.log(data)
  if (this.username=="admin" && this.password=="nestdigital") {
    this.route.navigate(['/viewcourse'])
  } else {
    alert("Invalid Input")
  }
  }
}
