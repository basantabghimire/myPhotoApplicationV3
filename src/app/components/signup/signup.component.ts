import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  imageUrl ='../../../assets/phot01.png';
 //email Validation
 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
 //password hide true or false
 hide = true;

  email!: string;
  password!: string;

 credentials={
   email:'',
   password:''
   
 }
 LoginLogo="../../../assets/loginIcon.png";
 constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
  signup(){
    console.log("user try to signup")
    this.userService.SignUp(this.email,this.password)
    this.email="";
    this.password="";
  }

}
