import { Component } from '@angular/core';
import { LoopCustomColorDirective } from '../loop-custom-color.directive';

@Component({
  selector: 'app-loop-custom-color',
  standalone: true,
  imports: [LoopCustomColorDirective],
  templateUrl: './loop-custom-color.component.html',
  styleUrl: './loop-custom-color.component.scss',
})
export class LoopCustomColorComponent {}
