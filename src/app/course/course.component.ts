import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(
    private courseservice : CourseService
  ) { }

  ngOnInit(): void {
    this.courseservice.getCourse().subscribe(
      data=>{
        this.courses=data;        
      }
    )

    
  }
  courses:Course[]=[]

filter = this.courses
  searchByName = ''
  filterbyCoursename(event:any)
  {
    console.log(event.target.value)
    this.searchByName = event.target.value

    this.courses = this.courses.filter(course => course.Masters.every
      (Master=>Master.course_name.includes(this.searchByName.toLowerCase())))
  }









  // filterArray = this.courses

  // private  _search_course = ""

  // get search_course()
  // {
  //   return this._search_course
  // }
  // set search_course(course_name)
  // {     
  //   this._search_course = course_name 
  //   this.filterArray = this.courses.filter(course => course.Masters.filter(master => master.course_name.toLowerCase().includes(course_name.toLowerCase())))
  // }

  // filteredArray = this.courses
  // private _searchByname = ''
  // get searchByname()
  // {
  //   return this._searchByname
  // }

  // set searchByname(product_name)
  // {
  //   this._searchByname=product_name
  //   this.filteredArray=this.courses.filter(product => product.Masters.filter(matser => matser.course_name.toLowerCase().
  //   includes(product_name.toLowerCase())))

  // }

  
}
