import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './1-var-output/list/list.component';
import { StudentComponent } from './1-var-output/student/student.component';
import { ManageTaskComponent } from './2-todo-list/manage-task/manage-task.component';
import { ToggleCustomComponent } from './4-custom-directive/toggle-custom/toggle-custom.component';
import { ToggleComponent } from './3-directive/toggle/toggle.component';
import { LoopColorComponent } from './3-directive/loop-color/loop-color.component';
import { TimerClockComponent } from './3-directive/timer-clock/timer-clock.component';
import { ToggleInputComponent } from './4-custom-directive/toggle-input/toggle-input.component';
import { LoopCustomColorComponent } from './4-custom-directive/loop-custom-color/loop-custom-color.component';
import { TimerCustomClockComponent } from './4-custom-directive/timer-custom-clock/timer-custom-clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListComponent,
    StudentComponent,
    ManageTaskComponent,
    ToggleComponent,
    LoopColorComponent,
    TimerClockComponent,
    ToggleCustomComponent,
    ToggleInputComponent,
    LoopCustomColorComponent,
    TimerCustomClockComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
