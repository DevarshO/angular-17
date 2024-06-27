import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  isGreen: boolean = true;
  color: string = 'green';
  assignColor: string = 'green';

  changeColor(color: string) {
    this.assignColor = color;
  }
}
