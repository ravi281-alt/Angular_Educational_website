import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { find, map, Observable } from "rxjs";
import { Course, Master, posts } from "./course";


@Injectable({
    providedIn: "root"
})


export class CourseService {
    constructor(
        private http: HttpClient
    ) { }


    getCourse(): Observable<Course[]> {
        return this.http.get<Course[]>("http://localhost:4200/assets/course.json")
    }

    getCourseById(id: number): Observable<Master | undefined> {
        return this.http.get<Course[]>("http://localhost:4200/assets/course.json").
            // pipe(map(courses => {return courses.find(course => course.Masters.find(master =>master.course_id===id))}))
            pipe(map(courses => {return courses.find(course => course.Masters)})).pipe(map(masters => 
                {return masters?.Masters.find(master => master.course_id===id)}))
           
    }
    getCourseByIdPost(name: string): Observable<posts | undefined> {
        return this.http.get<Course[]>("http://localhost:4200/assets/course.json").
            // pipe(map(courses => {return courses.find(course => course.Masters.find(master =>master.course_id===id))}))
            pipe(map(courses => {return courses.find(course => course.Post)})).pipe(map(posts => 
                {return posts?.Post.find(post => post.course_name===name)}))
           
    }


}
