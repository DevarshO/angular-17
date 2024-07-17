import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appToggleInput]',
  standalone: true,
})
export class ToggleInputDirective implements OnChanges {
  @Input() txtColor: string = 'green';
  @Input() submitColor: string = '';
  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['txtColor']) {
      this.el.nativeElement.style.backgroundColor = this.txtColor;
    }
    if (changes['submitColor']) {
      this.el.nativeElement.style.backgroundColor = this.submitColor;
    }
  }

  //   DOUBT HERE FLOW
}
