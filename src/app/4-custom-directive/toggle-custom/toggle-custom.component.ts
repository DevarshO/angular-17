import { Component } from '@angular/core';
import { ToggleCustomDirective } from '../toggle-custom.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle-custom',
  standalone: true,
  imports: [ToggleCustomDirective, FormsModule],
  templateUrl: './toggle-custom.component.html',
  styleUrl: './toggle-custom.component.scss',
})
export class ToggleCustomComponent {
  changeColor: boolean = false;
}
