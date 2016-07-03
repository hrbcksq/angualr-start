import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styleUrls: ['app\\favorite.style.css']   
})
export class FavoriteComponent{
    @Input('is-favorite') isActive: boolean = false;
    @Output() change = new EventEmitter();    

    changeState(){        
        this.change.emit({state: this.isActive}); 
    }
    
}
 