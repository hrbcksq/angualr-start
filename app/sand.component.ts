import { Component } from '@angular/core'
import { SandService } from './sand.service'

@Component({
    selector: 'sand',
    template: `
        <div (click)='onClick($event)'>
            <button class='btn btn-primary' (click)="onClick($event)">SimpleButton</button>
        </div>`,
    providers:[SandService]
})
export class SandComponent{
    private isActive: boolean = false;

    constructor(private sandService: SandService){

    }

    onClick($event){
        $event.stopPropagation();
        this.isActive = !this.isActive;        
        console.log('clicked', $event);
    }
}
