import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-fixed-content',
  standalone: true,
  imports: [],
  templateUrl: './main-fixed-content.component.html',
  styleUrl: './main-fixed-content.component.scss'
})
export class MainFixedContentComponent {
  @Output() openModal = new EventEmitter()

  handleOpenModal(){
    this.openModal.emit()
  }
}
