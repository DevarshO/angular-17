import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-complete-task',
  standalone: true,
  imports: [],
  templateUrl: './complete-task.component.html',
  styleUrl: './complete-task.component.scss',
})
export class CompleteTaskComponent {
  @Input() completedTasks: string[] = [];
}
