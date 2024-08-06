import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './components/home/aside/aside.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainFixedContentComponent } from './components/home/main-fixed-content/main-fixed-content.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ToDoListComponent } from './components/home/to-do-list/to-do-list.component';
import { CommonModule } from '@angular/common';
import { TasksService } from './services/tasks.service';
import { defaultIfEmpty, map, Observable, of } from 'rxjs';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'esig-tasks';
  currentView: string = 'tasks';
  
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
}
