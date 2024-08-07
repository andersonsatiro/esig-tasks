import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './components/home/aside/aside.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainFixedContentComponent } from './components/home/main-fixed-content/main-fixed-content.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ToDoListComponent } from './components/home/to-do-list/to-do-list.component';
import { CommonModule } from '@angular/common';
import { TasksService } from './services/tasks.service';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
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

interface SendTask {
  id?: string;
  description: string;
  priority: string;
  responsible: string;
  status: string;
  creation_date: string;
  expected_delivery_date: string;
  actual_delivery_date?: string;
  update_at?: string
}

export interface NewTask {
  description: string;
  expected_delivery_date: string;
  priority: string;
  responsible: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsideComponent,
    HeaderComponent,
    MainFixedContentComponent,
    DashboardComponent,
    ToDoListComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'esig-tasks';
  currentView: string = 'tasks';
  modalIsOpen = false;
  formsIsInvalid = false;
  taskCreated = false;
  
  tasks$: Observable<Task[]> = new Observable<Task[]>()

  constructor(private taskService: TasksService){}
  
  setView(view: string) {
    this.currentView = view;
  }
  
  ngOnInit(): void {
    this.taskService.fetchData('http://localhost:3333/tasks').subscribe(response => {
      this.tasks$ = of(response)
    })
  }

  handleOpenModal() {
    this.modalIsOpen = true
  }

  newTask: NewTask = {
    description: '',
    expected_delivery_date: '',
    priority: '',
    responsible: ''
  };

  handleSubmit() {
    if (this.isFormValid()) {
      const data: SendTask = {
        ...this.newTask,
        status: "não iniciada",
        creation_date: (new Date()).toString()
      };

      try {
        this.taskService.addData('http://localhost:3333/criar-tarefa', data).subscribe(() => {
          this.taskCreated = true
          this.ngOnInit()
          setTimeout(() => {
            this.taskCreated = false
          }, 2000)
        });
      }catch(error){
        console.error(error)
      }

    } else {
      this.formsIsInvalid = true
      setTimeout(() => {
        this.formsIsInvalid = false
      }, 2000)
    }
  }

  isFormValid(): boolean {
    return !!(
      this.newTask.description &&
      this.newTask.expected_delivery_date &&
      this.newTask.priority &&
      this.newTask.responsible
    );
  }

  handleReset() {
    this.newTask = {
      description: '',
      expected_delivery_date: '',
      priority: '',
      responsible: ''
    };
  }
}
