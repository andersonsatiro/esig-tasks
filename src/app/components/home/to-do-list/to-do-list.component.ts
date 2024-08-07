import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from '../../../services/tasks.service';

interface Task {
  id: string;
  description: string;
  priority: string;
  responsible: string;
  status: string;
  creation_date: string;
  expected_delivery_date: string;
  actual_delivery_date?: string;
  update_at?: string
}

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  @Input() tasks: Task[] | null = []
  trashItems: Task[] | null = [] 

  constructor(private taskService: TasksService){}

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

  selectAllTasks(imgClass: string){
    const images = document.getElementsByClassName(imgClass)
    for(let i = 0; i < images.length; i++){
      if(images[i].getAttribute('src') === 'svg/checkbox.svg'){
        images[i].setAttribute('src', 'svg/checkbox-selected.svg')
        this.trashItems = this.tasks
      } else {
        images[i].setAttribute('src', 'svg/checkbox.svg')
        this.trashItems = []
      }
    }
  }

  get isTrashEmptyOrNull(): boolean {
    return !this.trashItems || this.trashItems.length === 0;
  }

  removeSelected() {
    let idsToRemove: any = []
    if(this.trashItems){
      idsToRemove = this.trashItems.map(item => item.id);
    }
    if (idsToRemove.length > 0) {
      try {
        this.taskService.removeData('https://esig-tasks-server.onrender.com/remover-tarefa', idsToRemove).subscribe(() => {
          this.tasks = [];
          this.trashItems = [];
          this.selectAllTasks('checkbox')
        });
      }catch(error){
        console.error(error)
      }
    }
  }

  get isTasksEmptyOrNull(): boolean {
    return !this.tasks || this.tasks.length === 0;
  }
}
