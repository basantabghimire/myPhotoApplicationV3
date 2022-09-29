import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title='Profile Page'
  imageUrl ='https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg';
  viewCount = 0;
  firstName="Basanta";

  constructor() {}

  ngOnInit(): void {}

  incrementCount(){
    this.viewCount++;
  }

}
