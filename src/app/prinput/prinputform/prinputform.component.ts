import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prinputform',
  templateUrl: './prinputform.component.html',
  styleUrls: ['./prinputform.component.css']
})
export class PrinputformComponent implements OnInit {
  @Output() prinputemit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  itemAdded() {
    this.prinputemit.emit();
  }
}
