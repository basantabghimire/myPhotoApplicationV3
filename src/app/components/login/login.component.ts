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

  imageUrl ='https://scontent.fyto1-1.fna.fbcdn.net/v/t1.6435-9/62463661_10157386106568331_1829929532958703616_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=enEg0K3pUNAAX_dNjCR&_nc_ht=scontent.fyto1-1.fna&oh=00_AT8NLnlDIHOcf8SneRQtXlDYtZE0-gV3PkUrKd4fa7BuvQ&oe=6351BBB8';

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
