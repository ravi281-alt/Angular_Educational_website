import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  start_index = 0;
  end_index = 3;

}

