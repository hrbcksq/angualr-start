import { Component, Input } from '@angular/core'

@Component({
    selector: 'favorite',
    template: `<i class='glyphicon' [style.font-size]='size' [class.glyphicon-star]='isActive' [class.glyphicon-star-empty]='!isActive' (click)='changeState()'></i>`,
    inputs: ['isActive:is-favorite'],
    outputs:[]

})
export class FavoriteComponent{
    @Input('is-favorite') isActive: boolean = false;
    
    private size: number = 24;

    changeState(){
        this.isActive = !this.isActive; 
    }
    
}
 