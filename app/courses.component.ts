import { Component } from '@angular/core';

@Component({
        selector: 'courses',
        template: `
                <h3>Courses Component</h3>
                {{title}}
                <ul>
                        <li *ngFor='#course of courses'>
                                {{course}}
                        </li>
                </ul>
                `
})
export class CoursesComponent {
        title = "The title of courses page";
        courses = ['Course1', 'Course2', 'Course3'];
}
