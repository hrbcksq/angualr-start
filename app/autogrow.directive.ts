import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[autogrow]',
    host:{
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur()'
    }
})
export class AutoGrowDirective{
    constructor(private el: ElementRef, private re: Renderer){}

    onFocus(){
        this.re.setElementStyle(this.el.nativeElement,"width","400");
    }

    onBlur(){
        this.re.setElementStyle(this.el.nativeElement,"width","200");
    }
}
