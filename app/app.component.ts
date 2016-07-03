import { Component } from '@angular/core';
import { FavoriteComponent } from './favorite.component'
import { LikeComponent } from './like.component'

// Property binding works only one way
// Class binding is the way to bind property value to class

// <button class='btn btn-primary' [style.backgroundColor]="isActive ? 'green' : 'blue'" >submit</button>

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <favorite [is-favorite]='isActive' (change)='consoleLog($event)'></favorite>
        <like [count]='likes' (changed)='liked($event)'></like>`,
    directives: [FavoriteComponent, LikeComponent],
    styleUrls: ['app//app.style.css']
})
export class AppComponent {
    private title: string = "Application";    
    private isActive: boolean = true; 
    private likes: number = 42;

    consoleLog($event) {
        console.log($event);
    }

    liked($event) {        
        this.likes += $event.result ? 1 : -1;
        this.consoleLog($event);         
    }   
}