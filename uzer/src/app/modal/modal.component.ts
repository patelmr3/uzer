import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalVisible;
  @Output() modalVisibleChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  closeModal() {
    this.modalVisible = !this.modalVisible;
    this.modalVisibleChange.emit(this.modalVisible);
  }
}
