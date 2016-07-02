import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'favorite',
    template: `<i class='glyphicon' [style.font-size]='size' [class.glyphicon-star]='isActive' [class.glyphicon-star-empty]='!isActive' (click)='changeState()'></i>`
   
})
export class FavoriteComponent{
    @Input('is-favorite') isActive: boolean = false;
    @Output() change = new EventEmitter();
    private size: number = 24;

    changeState(){
        this.isActive = !this.isActive;
        this.change.emit({state: this.isActive}); 
    }
    
}
 