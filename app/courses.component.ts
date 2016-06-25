import { Component } from '@angular/core';
import { CoursesService } from './courses.service'

@Component({
        selector: 'courses',
        template: `
                <h3>Courses Component</h3>
                {{title}}
                <ul>
                        <li *ngFor='let course of courses'>
                                {{course}}
                        </li>
                </ul>`,
        providers: [CoursesService]
        
})
export class CoursesComponent {
        title = "The title of courses page";
        courses;
        constructor(courseService: CoursesService){
                this.courses = courseService.getCourses();
        }        
}
