import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/navbar/posts/posts.component';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';

const routes: Routes = [
  {path:'',component:HomeComponent,redirectTo:"/"},
  {path:'post',component:PostsComponent},
  {path:'postdetails/:id',component:PostdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
