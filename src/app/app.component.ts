import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './1-var-output/list/list.component';
import { StudentComponent } from './1-var-output/student/student.component';
import { ManageTaskComponent } from './2-todo-list/manage-task/manage-task.component';
import { ToggleComponent } from './3-directive/toggle/toggle.component';
import { LoopColorComponent } from './3-directive/loop-color/loop-color.component';
import { TimerClockComponent } from './3-directive/timer-clock/timer-clock.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
