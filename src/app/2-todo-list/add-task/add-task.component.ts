import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  @Output() newTask: EventEmitter<string> = new EventEmitter();
  task!: string;

  addTask() {
    this.newTask.emit(this.task);
    this.task = '';
  }
}
