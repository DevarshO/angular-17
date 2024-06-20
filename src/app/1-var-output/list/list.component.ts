import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements AfterViewInit {
  @Input() student: any = {};
  @Output() name: EventEmitter<string> = new EventEmitter();

  ngAfterViewInit(): void {
    this.name.emit(this.student.name);
  }
}
