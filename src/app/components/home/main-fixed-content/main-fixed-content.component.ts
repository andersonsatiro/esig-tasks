import { Component } from '@angular/core';
import { TaskDataBoxComponent } from '../task-data-box/task-data-box.component';

@Component({
  selector: 'app-main-fixed-content',
  standalone: true,
  imports: [
    TaskDataBoxComponent
  ],
  templateUrl: './main-fixed-content.component.html',
  styleUrl: './main-fixed-content.component.scss'
})
export class MainFixedContentComponent {
}
