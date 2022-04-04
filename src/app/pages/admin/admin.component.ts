import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService:UserService) { }
  message;

  ngOnInit(): void {
    this.forAdmin();

  }
  forAdmin(){
    this.userService.forAdmin().subscribe(
      (response)=>{
        console.log(response);
        this.message=response;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
