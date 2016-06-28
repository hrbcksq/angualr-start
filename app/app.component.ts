import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component'
import { AuthorsComponent } from './authors.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <img src='{{image}}'>
        <img bind-src='image'>
        <img [src]='image'>
        <courses></courses>
        <authors></authors>`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
    private title: string = "My first Angualr 2 App";
    private image: string = "https://images.unsplash.com/photo-1465205568425-23fdd3805e49"

 }