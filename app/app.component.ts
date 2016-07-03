import { Component } from '@angular/core';
import { FavoriteComponent } from './favorite.component'
import { LikeComponent } from './like.component'
import { VoterComponent } from './voter.component'

// Property binding works only one way
// Class binding is the way to bind property value to class

// <button class='btn btn-primary' [style.backgroundColor]="isActive ? 'green' : 'blue'" >submit</button>

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        <favorite [is-favorite]='user.favorite' (change)='onFavorite($event)'></favorite>
        <like [count]='post.likes' [liked]='user.liked' (changed)='onLike($event)'></like>
        <voter [voteCount]='post.votes' [myVote]='user.voted' (vote)='onVote($event)'></voter>`,
    directives: [FavoriteComponent, LikeComponent, VoterComponent],
    styleUrls: ['app//app.style.css']
})
export class AppComponent {
    private title: string = "Application";    
    private isActive: boolean = true;

    private post = {
        likes: 43,        
        votes: 13
    } 

    private user = {
        liked: true,
        voted: 1,
        favorite: true    
    }    

    Log($event) {
        console.log($event);
    }

    onFavorite($event){
        this.user.favorite = !this.user.favorite;
        this.Log(this.user.favorite);
    }

    onLike($event) {        
        this.post.likes += $event.result ? 1 : -1;
        this.Log($event);         
    }   

    onVote($event) {
        this.post.votes += $event.result;
    }
}