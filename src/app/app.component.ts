import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './components/home/aside/aside.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainFixedContentComponent } from './components/home/main-fixed-content/main-fixed-content.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ToDoListComponent } from './components/home/to-do-list/to-do-list.component';
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
  @Input() tasks: Task[] = [
    {
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      priority: 'alta',
      responsible: 'José Augusto',
      status: 'entregue',
      end_date: 'Seg, 11 jun, 2024',
    },
    {
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      priority: 'média',
      responsible: 'Maria Vicente',
      status: 'em andamento',
      end_date: 'Ter, 39 ago, 2024',
    },
    {
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      priority: 'baixa',
      responsible: 'Ricardo Moreira',
      status: 'não iniciada',
      end_date: 'Qua, 05 ago, 2024',
    },
    {
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      priority: 'alta',
      responsible: 'Théo Henrique',
      status: 'para hoje',
      end_date: 'Qui, 08 set, 2024',
    },
    {
      task: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      priority: 'baixa',
      responsible: 'Noberto Silva',
      status: 'entregue',
      end_date: 'Sex, 23 out, 2024',
    }
  ];
  title = 'esig-tasks';
  currentView: string = 'tasks';
  
  setView(view: string) {
    this.currentView = view;
  }
}
