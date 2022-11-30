import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  username=""
  password=""

  readValue=()=>{
  let data:any={"username":this.username,"password":this.password}
  console.log(data)
  if (this.username=="admin" && this.password=="nestdigital") {
    alert("success")
  } else {
    alert("fail")
  }
  }
}
