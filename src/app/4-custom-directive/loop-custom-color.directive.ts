import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appLoopCustomColor]',
  standalone: true,
})
export class LoopCustomColorDirective implements OnChanges {
  @Input('appLoopCustomColor') isRed!: boolean;
  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.backgroundColor = this.isRed ? 'red' : 'green';
  }
}

/**
 * ElementRef and Renderer2: Use when direct DOM manipulation is necessary but prefer Renderer2 for its security and Angular integration.

 * HostBinding and HostListener: Use when you need to bind to host element properties or listen to host element events directly from the directive.

 * ViewChild or ContentChild: Use when you need to interact with specific child components or elements within the directive's template.
 */
