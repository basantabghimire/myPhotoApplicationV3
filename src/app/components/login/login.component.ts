import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service'; // user authentication

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {

  imageUrl ='../../../assets/phot01.png';

  email!: string;
  password!: string;

  //email Validation
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  //password hide true or false
  hide = true;

  //sign in form visiable or not
  signInFormVisible=true;

  //make sign in version in invisable version
  makeSignInFormVisable(){
    this.signInFormVisible=true;
    
  }
  makeSignUpFormVisable(){
    this.signInFormVisible=false;
  }
  signin(){
    console.log("user try to login")
    this.userService.SignIn(this.email,this.password)
    this.email="";
    this.password="";
  }
  

  credentials={
    email:'',
    password:''
  }
  LoginLogo="../../../assets/loginIcon.png";
  constructor( public userService:UserService) { }

  ngOnInit(): void {
    
  }
}
