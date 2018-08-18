import { Component, OnInit, EventEmitter, Input, ElementRef, ViewChild, Output } from '@angular/core';
import { PrinputdataModel } from '../../shared/pr.model';

@Component({
  selector: 'app-prinput-preview',
  templateUrl: './prinput-preview.component.html',
  styleUrls: ['./prinput-preview.component.css']
})
export class PrinputPreviewComponent implements OnInit {
  @Input() prinputdatas: PrinputdataModel;


  constructor() { }

  ngOnInit() {
  }
}
