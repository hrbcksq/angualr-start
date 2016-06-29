import { Component } from '@angular/core'
import { SandService } from './sand.service'

@Component({
    selector: 'sand',
    template: `<button class='btn btn-primary' 
        [class.active]=isActive
        [style.color]="isActive ? 'green' : 'gray'" >
            SimpleButton
        </button>`,
    host:{
        '(click)' : 'onClick()'    
    },
    providers:[SandService]
})
export class SandComponent{
    private isActive: boolean = false;

    constructor(private sandService: SandService){

    }

    onClick(){
        this.isActive = !this.isActive;
        console.log('clicked');
    }
}
