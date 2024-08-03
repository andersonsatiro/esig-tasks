import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  @Output() viewChange = new EventEmitter<string>();

  changeMainContent(buttonIDAddClass: string, buttonIDRemoveClass: string, content: string){
    const buttonAddClass = document.getElementById(buttonIDAddClass)
    buttonAddClass?.classList.add('clicked')

    const buttonRemoveClass = document.getElementById(buttonIDRemoveClass)
    buttonRemoveClass?.classList.remove('clicked')

    this.viewChange.emit(content)
  }
}
