import { Injectable, NgZone } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { SignupComponent } from '../components/signup/signup.component';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {
 
  userData: any; //Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone) // NgZone service to remove outside scope warning
    {
      /* Saving user data in localstorage when 
    logged in and setting up null when logged out*/
    
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        //this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        //JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        //this.userData(result.user);
        this.afAuth.authState.subscribe((user) => {  //check 
          if (user) {
            this.router.navigate(['albums/recent']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
        console.log('STH:', error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        
      })
      .catch((error) => {
        window.alert(error.message);
        console.log('STH:', error.message);
      });
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}