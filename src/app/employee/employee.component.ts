import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeId=""
  password=""

  employeeValue=()=>{

    let data:any={"employeeId":this.employeeId,"password":this.password}
    console.log(data)

    if ((this.employeeId=="1122")&&(this.password=="12345")) {
      alert("SUCCESS")
      
    } else {
      alert("fail")
    }
  }


}
