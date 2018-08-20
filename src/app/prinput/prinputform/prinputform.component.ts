import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { PrinputdataModel } from '../../shared/pr.model';

@Component({
  selector: 'app-prinputform',
  templateUrl: './prinputform.component.html',
  styleUrls: ['./prinputform.component.css']
})
export class PrinputformComponent implements OnInit {
    // tslint:disable-next-line:no-output-on-prefix
  @Output() onInputPrData = new EventEmitter<PrinputdataModel>();

  @ViewChild('prnumber') prnumber: ElementRef;
  @ViewChild('qtynumber') qtynumber: ElementRef;
  @ViewChild('glnumber') glnumber: ElementRef;
  @ViewChild('unitpricenumber') unitpricenumber: ElementRef;
  @ViewChild('prdate') prdate: ElementRef;
  @ViewChild('itemdescription') itemdescription: ElementRef;
  @ViewChild('duedate') duedate: ElementRef;
  @ViewChild('remark') remark: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  itemAdded() {
    this.onInputPrData.emit({
      prno: 'prno',
      glcost: 'glcost',
      prdate: 'prdate',
      itemdesc: 'itemdesc',
      qty: 1000,
      unit: 'Sets',
      price: 500,
      suppliername: 'IT Advance',
      duedate: 'duedate',
      remark: 'remark'
    });
  }
}
