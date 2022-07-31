import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course, Master, posts } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private courseService:CourseService
  ) { }

  fetched_course$!:Observable<Master|undefined>
  

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    console.log(id)

    this.fetched_course$ = this.courseService.getCourseById(id)

    this.courseService.getCourseById(id).subscribe(
      data=>console.log(data)      
    )

    
}



}
