import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {


  empid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  street=""
  pin=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parent=""
  gender=""
  highdegree=""
  experience=""
  joining=""
  username=""
  password=""
  confirmpass=""

  registerValue=()=>{
    let data:any={"empid":this.empid,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"housename":this.housename,"street":this.street,"pin":this.pin,"district":this.district,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,"parent":this.parent,"gender":this.gender,"highdegree":this.highdegree,"experience":this.experience,"joining":this.joining,"username":this.username,"password":this.password,"confirmpass":this.confirmpass}
 
    if (this.password==this.confirmpass) {

      console.log(data)
      alert("Registerd Successfully")
      this.empid=""
      this.firstname=""
      this.lastname=""
      this.houseno=""
      this.housename=""
      this.street=""
      this.pin=""
      this.district=""
      this.state=""
      this.country=""
      this.mobile=""
      this.email=""
      this.parent=""
      this.gender=""
      this.highdegree=""
      this.experience=""
      this.joining=""
      this.username=""
      this.password=""
      this.confirmpass=""
      
    } else {

      alert("Password and Confirm Password doesn't Match")
      
    }
 
  }

}
