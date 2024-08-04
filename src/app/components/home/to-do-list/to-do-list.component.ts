import { Component, Input } from '@angular/core';
import { InputSelectComponent } from '../input-select/input-select.component';
import { CommonModule } from '@angular/common';

type taskPriority = 'alta' | 'média' | 'baixa'
type taskStatus = 'não iniciada' | 'em andamento' | 'para hoje' | 'entregue'

interface Task {
  task: string,
  priority: taskPriority,
  responsible: string,
  status: taskStatus,
  end_date: string,
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    InputSelectComponent,
    CommonModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  @Input() tasks: Task[] = [];

  getPriorityColor(priority: string, local: string){
    switch (priority) {
      case 'alta':
        return local === 'bg' ? '#FFDADA' : '#FF1414'    
      case 'média':
        return local === 'bg' ? '#FFF2DD' : '#D98634'
      default:
        return local === 'bg' ? '#AEE5FD' : '#00ADF8' 
    }
  }

  getStatusColor(status: string, local: string){
    switch (status) {
      case 'não iniciada':
        return local === 'bg' ? '#E4E4E4' : '#3F3748'
      case 'em andamento':
        return local === 'bg' ? '#AEE5FD' : '#00ADF8'
      case 'para hoje':
        return local === 'bg' ? '#FFF2DD' : '#D98634'
      default:
        return local === 'bg' ? '#CCFDD9' : '#409261'
    }
  }
}
