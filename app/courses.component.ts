import {Component} from '@angular/core';
import {CoursesService} from './courses.service'
import {AutoGrowDirective} from './autogrow.directive'

@Component({
        selector: 'courses',
        template: `
                <h2>Courses Component</h2>
                {{title}}
                <input type='text' autogrow/>
                <ul>
                        <li *ngFor='let course of courses'>
                                {{course}}
                        </li>
                </ul>`,
        providers: [CoursesService],
        directives: [AutoGrowDirective]
        
})
export class CoursesComponent {
        title = "The title of courses page";
        courses;
        constructor(courseService: CoursesService){
                this.courses = courseService.getCourses();
        }        
}
