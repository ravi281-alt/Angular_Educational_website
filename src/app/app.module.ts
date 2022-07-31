import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { CourseComponent } from './course/course.component'
import {  Route, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ContactComponent } from './contact/contact.component';


const routes:Routes=[
  {path:"home" ,component:HomeComponent},
  {path:"course", component:CourseComponent},
  {path:"contacts", component:ContactComponent},
  {path:"course/:id", component:CourseDetailComponent},  
  {path:"post/:name", component:PostDetailsComponent},  
  {path:"", component:HomeComponent,pathMatch:'full'},
  {path:"**", component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CourseComponent,
    PageNotFoundComponent,
    CourseDetailComponent,
    PostDetailsComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
