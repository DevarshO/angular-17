import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './1-var-output/list/list.component';
import { StudentComponent } from './1-var-output/student/student.component';
import { ManageTaskComponent } from './2-todo-list/manage-task/manage-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, StudentComponent, ManageTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
