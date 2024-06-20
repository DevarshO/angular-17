import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent {
  myName!: string;
  studentData = [
    {
      id: 1,
      name: 'Ritesh',
      class: '10th',
    },
    {
      id: 2,
      name: 'Omkar',
      class: '12th',
    },
    {
      id: 5,
      name: 'Sam',
      class: '5th',
    },
  ];
}
