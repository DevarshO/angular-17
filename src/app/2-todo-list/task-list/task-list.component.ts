import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() taskList: string[] = [];
  @Output() taskUpdate: EventEmitter<string> = new EventEmitter();

  updateTask(id: number) {
    this.taskUpdate.emit(this.taskList[id]);
    this.taskList.splice(id, 1);
  }
}
