import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-data-box',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './task-data-box.component.html',
  styleUrl: './task-data-box.component.scss'
})
export class TaskDataBoxComponent {
  @Input() numberTasks: number = 0;
  @Input() boxText: string = '';
  @Input() imagePath: string = '';
  @Input() imageBgColor: string = '';
  @Input() imageAlt: string = '';
  @Input() pendingTask: boolean = false;
  @Input() numberPendingTask: number = 0;
}
