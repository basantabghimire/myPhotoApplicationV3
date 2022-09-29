import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { CreateAlbumComponent } from './components/create-album/create-album.component';
import { LoginComponent } from './components/login/login.component';
import { MyAlbumsComponent } from './components/my-albums/my-albums.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecentAlbumsComponent } from './components/recent-albums/recent-albums.component';
import { SignupComponent } from './components/signup/signup.component';
import { UploadPictureComponent } from './components/upload-picture/upload-picture.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  { path:'',redirectTo:'/login', pathMatch:'full'},
  {path:'profile/:profileId', component:ProfileComponent},
  {path:'albums/me',component:MyAlbumsComponent},
  {path:'create', component: CreateAlbumComponent},
  {path:'album/:albumId', component: AlbumDetailsComponent},
  {path:'upload/:albumId', component: UploadPictureComponent},
  {path:'photo/:photoId', component: PhotoDetailsComponent},
  {path:'signup', component:SignupComponent},
  {path:'albums/recent', component:RecentAlbumsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
