import { Component } from '@angular/core'

@Component({
    selector: 'star',
    template: `<i class='glyphicon' [style.font-size]='size' [class.glyphicon-star]='isActive' [class.glyphicon-star-empty]='!isActive' (click)='changeState()'></i>`
})
export class StarComponent{
    private isActive: boolean = false;
    private size: number = 24;

    changeState(){
        this.isActive = !this.isActive; 
    }
    
}
 