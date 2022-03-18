import { Component, OnInit } from '@angular/core';
import { GetAllUser } from '../Shared/GetUSer.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  User:any=[]
  alert:boolean=false;
  constructor(private GetAllUser:GetAllUser, private router:Router) {
    this.User = this.GetAllUser.GetUser();
   }

  ngOnInit(): void {
  }

  GoToHome()
  {
    return this.router.navigate(['/Wahlmenu']);

  }

  vergleichen(f:NgForm)
  {
    let data = f.value;
    if(data.username === this.User.username )
    {
      if(data.password === this.User.password){
        this.GoToHome();
      }
    }else{
      this.alert=true;
    }
  }
}
