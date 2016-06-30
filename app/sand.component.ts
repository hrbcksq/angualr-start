import { Component } from '@angular/core'
import { SandService } from './sand.service'

@Component({
    selector: 'sand',
    template: `
        <input [(ngModel)]='title'/>

        <input type='button' value='clear' (click)='onClear()'/>
        Value: {{ title }}`,
    providers:[SandService]
})
export class SandComponent{
    private isActive: boolean = false;
    private title: string = 'title'

    constructor(private sandService: SandService){ }

    onInput($event){
        this.title = $event.target.value;
    }
    onClear(){
        this.title = '';
    }    
}
