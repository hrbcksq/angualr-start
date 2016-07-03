import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'voter',
    templateUrl: 'app\\voter.template.html',
    styleUrls: ['app\\voter.style.css']
})
export class VoterComponent{
    @Input('voteCount') votes: number;
    @Input('myVote') value: number;

    @Output('vote') onVote = new EventEmitter();

    onChange(value: number){
        if (this.value === value) return;        
        this.value += value;        
        this.onVote.emit({result: value});
    }
} 

