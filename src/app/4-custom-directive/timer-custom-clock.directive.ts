import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTimerCustomClock]',
  standalone: true,
})
export class TimerCustomClockDirective implements OnChanges {
  @Input('appTimerCustomClock') timer!: number;
  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.timer === -1) {
      this.el.nativeElement.style.display = 'none';
    } else if (this.timer < 2) {
      this.el.nativeElement.style.fontWeight = 'bold';
      this.el.nativeElement.style.backgroundColor = 'red';
    } else if (this.timer < 4) {
      this.el.nativeElement.style.backgroundColor = 'orange';
    } else if (this.timer < 6) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else if (this.timer < 8) {
      this.el.nativeElement.style.backgroundColor = 'lightgreen';
    } else {
      this.el.nativeElement.style.backgroundColor = 'green';
    }
  }
}
