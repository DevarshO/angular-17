import { Component } from '@angular/core';
import { TimerCustomClockDirective } from '../timer-custom-clock.directive';

@Component({
  selector: 'app-timer-custom-clock',
  standalone: true,
  imports: [TimerCustomClockDirective],
  templateUrl: './timer-custom-clock.component.html',
  styleUrl: './timer-custom-clock.component.scss',
})
export class TimerCustomClockComponent {
  timer: number = 10;
  constructor() {
    setInterval(() => {
      this.timer >= 0 && this.timer--;
    }, 1000);
  }
}
