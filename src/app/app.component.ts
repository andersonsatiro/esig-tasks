import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './components/home/aside/aside.component';
import { HeaderComponent } from './components/home/header/header.component';
import { MainFixedContentComponent } from './components/home/main-fixed-content/main-fixed-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsideComponent,
    HeaderComponent,
    MainFixedContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'esig-tasks';
}
