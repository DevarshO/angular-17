import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer-clock.component.html',
  styleUrl: './timer-clock.component.scss',
})
export class TimerClockComponent {
  timer: number = 10;
  color: string = 'green';
  display: string = 'block';

  constructor() {
    setInterval(() => {
      this.timer >= 0 && this.timer--;
      this.setColor();
    }, 1000);
  }

  setColor() {
    if (this.timer === -1) {
      this.display = 'none';
    } else if (this.timer < 2) {
      this.color = 'red';
    } else if (this.timer < 4) {
      this.color = 'orange';
    } else if (this.timer < 6) {
      this.color = 'yellow';
    } else if (this.timer < 8) {
      this.color = 'lightgreen';
    } else {
      this.color = 'green';
    }
  }
}
