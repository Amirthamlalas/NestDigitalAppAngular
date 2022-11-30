import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeId=""
  password=""
  constructor(private route:Router){}

  employeeValue=()=>{

    let data:any={"employeeId":this.employeeId,"password":this.password}
    console.log(data)

    if ((this.employeeId=="1122")&&(this.password=="12345")) {
      this.route.navigate(['/addcourse'])
      
    } else {
      alert("invalid input")
    }
  }


}
