import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {

  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  constructor(private api:ApiService){}

  friendValue=()=>{
    let data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
  
  console.log(data)
  this.api.addFriend(data).subscribe(
    (response:any)=>{
      if (response.status=="success") {
        alert("friend added successfully")
        this.name=""
  this.friendName=""
  this.friendNickName=""
  this.DescribeYourFriend=""
        
      } else {
        alert("something went wrong")
        
      }
    }
  )
  }

}
