import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { posts } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private courseService:CourseService
  ) { }
  fetched_course$!:Observable<posts|undefined>
  ngOnInit(): void {

    const name = this.route.snapshot.paramMap.get('name')!
    console.log(name)

    this.fetched_course$ = this.courseService.getCourseByIdPost(name)
  }

}
