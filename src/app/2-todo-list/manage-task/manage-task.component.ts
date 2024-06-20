import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { CompleteTaskComponent } from '../complete-task/complete-task.component';

@Component({
  selector: 'app-manage-task',
  standalone: true,
  imports: [
    FormsModule,
    TaskListComponent,
    AddTaskComponent,
    CompleteTaskComponent,
  ],
  templateUrl: './manage-task.component.html',
  styleUrl: './manage-task.component.scss',
})
export class ManageTaskComponent {
  tasks: string[] = [];
  completedTasks: string[] = [];

  updateTask(task: string) {
    this.tasks.push(task);
  }

  updateCompleteTask(task: string) {
    this.completedTasks.push(task);
  }
}
