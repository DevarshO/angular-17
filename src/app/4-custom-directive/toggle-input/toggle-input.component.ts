import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleInputDirective } from '../toggle-input.directive';

@Component({
  selector: 'app-toggle-input',
  standalone: true,
  imports: [FormsModule, ToggleInputDirective],
  templateUrl: './toggle-input.component.html',
  styleUrl: './toggle-input.component.scss',
})
export class ToggleInputComponent {
  inputColor!: string;
  submitColor!: string;

  changeColor() {
    this.submitColor = this.inputColor;
    // this.inputColor = '';
  }
}
