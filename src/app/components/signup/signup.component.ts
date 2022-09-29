import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
//import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
//import { UserService } from 'src/app/services/user.service'; // user authentication

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  imageUrl ='https://scontent.fyto1-1.fna.fbcdn.net/v/t1.6435-9/62463661_10157386106568331_1829929532958703616_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=enEg0K3pUNAAX_dNjCR&_nc_ht=scontent.fyto1-1.fna&oh=00_AT8NLnlDIHOcf8SneRQtXlDYtZE0-gV3PkUrKd4fa7BuvQ&oe=6351BBB8';
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
