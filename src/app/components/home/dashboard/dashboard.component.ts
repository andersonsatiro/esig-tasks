import { Component } from '@angular/core';
import { TaskDataBoxComponent } from '../task-data-box/task-data-box.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TaskDataBoxComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
