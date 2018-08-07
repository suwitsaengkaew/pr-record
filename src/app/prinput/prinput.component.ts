import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prinput',
  templateUrl: './prinput.component.html',
  styleUrls: ['./prinput.component.css']
})
export class PrinputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  itemAdded() {
    console.log('Item Added');
  }
}
