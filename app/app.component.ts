import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'
import { FavoriteComponent } from './favorite.component'

// Property binding works only one way
// Class binding is the way to bind property value to class

// <button class='btn btn-primary' [style.backgroundColor]="isActive ? 'green' : 'blue'" >submit</button>

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <favorite [is-favorite]='isActive' (change)='consoleLog($event)'></favorite>`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent {
    private title: string = "Application";    
    private isActive: boolean = true; 

    consoleLog($event) {
        console.log($event);
    }   
}