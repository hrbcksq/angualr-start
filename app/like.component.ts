import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styleUrls: ['app//like.style.css']
})
export class LikeComponent{
    @Input('liked') isLiked: boolean = false;
    @Input('count') likesCount: number;    

    @Output() private changed = new EventEmitter()

    onChange(){
        this.isLiked = this.isLiked;        
        this.changed.emit({ result: this.isLiked });
    } 
}
