import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component'

@Component({
    selector: 'my-app',
    template: `
        <h2> My first Angualr 2 App </h2>
        <courses></courses>`,
    directives: [CoursesComponent]
})
export class AppComponent { }