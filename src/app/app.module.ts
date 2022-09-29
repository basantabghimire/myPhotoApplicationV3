import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MyAlbumsComponent } from './components/my-albums/my-albums.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { UploadPictureComponent } from './components/upload-picture/upload-picture.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FotterComponent } from './components/fotter/fotter.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignupComponent } from './components/signup/signup.component';
import { RecentAlbumsComponent } from './components/recent-albums/recent-albums.component';

/*https://material.angular.io/components/*/

import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

/* user service */
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyAlbumsComponent,
    ProfileComponent,
    CreateAlbumComponent,
    AlbumDetailsComponent,
    UploadPictureComponent,
    PhotoDetailsComponent,
    NavbarComponent,
    FotterComponent,
    SignupComponent,
    RecentAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
   
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
