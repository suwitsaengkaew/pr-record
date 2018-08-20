import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { PrinputdataModel } from '../../shared/pr.model';
import { Months, Suppliers, Units } from '../../shared/templete.model';

@Component({
  selector: 'app-prinputform',
  templateUrl: './prinputform.component.html',
  styleUrls: ['./prinputform.component.css']
})
export class PrinputformComponent implements OnInit {
    // tslint:disable-next-line:no-output-on-prefix
  @Output() onInputPrData = new EventEmitter<PrinputdataModel>();
  // Column 1
  @ViewChild('prnumber') prnumber: ElementRef;
  @ViewChild('price') price: ElementRef;
  // Column 1

  // Column 2
  @ViewChild('qtynumber') qtynumber: ElementRef;
  // Column 2

  // Column 3
  @ViewChild('glnumber') glnumber: ElementRef;
  @ViewChild('unitpricenumber') unitpricenumber: ElementRef;
  // Column 3

  // Column 4
  @ViewChild('prdate') prdate: ElementRef;
  // Column 4

  // Column 5
  @ViewChild('itemdescription') itemdescription: ElementRef;
  @ViewChild('duedate') duedate: ElementRef;
  @ViewChild('remark') remark: ElementRef;
  // Column 5

  months = Months;
  units = Units;
  suppliers = Suppliers;
  mon = ''; // Month
  unitprice = ''; // Unit
  sup = '';  // Supplier Name

  constructor() {
    this.mon = 'Month';
    this.unitprice = 'Unit';
    this.sup = 'Supplier Name';
   }

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
