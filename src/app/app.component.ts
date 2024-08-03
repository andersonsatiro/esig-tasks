import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './components/home/aside/aside.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainFixedContentComponent } from './components/home/main-fixed-content/main-fixed-content.component';
import { DashboardComponent } from './components/home/dashboard/dashboard.component';
import { ToDoListComponent } from './components/home/to-do-list/to-do-list.component';
import { CommonModule } from '@angular/common';

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

  currentView: string = 'dashboard';

  setView(view: string) {
    this.currentView = view;
  }
}
