import { Component } from '@angular/core'
import { AuthorsService } from './authors.service'

@Component({
    selector: 'authors',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor='let author of authors'>
                {{author}}
            </li>
        </ul>`,
    providers: [AuthorsService]
        
})
export class AuthorsComponent{
    title: string = "Authors Component"
    authors;

    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }
}
