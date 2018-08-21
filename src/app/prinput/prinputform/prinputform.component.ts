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
  @ViewChild('glnumber') glnumber: ElementRef;
  @ViewChild('qtynumber') qtynumber: ElementRef;
  // Column 2

  // Column 3
  @ViewChild('prdate') prdate: ElementRef;
  @ViewChild('totalpricenumber') totalpricenumber: ElementRef;
  // Column 3

  // Column 4
  @ViewChild('itemdescription') itemdescription: ElementRef;
  @ViewChild('duedate') duedate: ElementRef;
  @ViewChild('remark') remark: ElementRef;
  // Column 4

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
    const _prnumber = this.prnumber.nativeElement.value;
    const _glnumber = this.glnumber.nativeElement.value;
    const _prdate = this.prdate.nativeElement.value;
    const _itemdescription = this.itemdescription.nativeElement.value;

    if (_prnumber.length !== 9 ) {
      alert('Please check PR Number!!');
    }

    if (_glnumber.length < 1 ) {
      alert('Please check GL Number!!');
    }

    if (_prdate.length > 0) {
      alert(_prdate);
    } else { console.log('PR Date' + _prdate.length); }

    if (_itemdescription < 1) {
      alert('Please input description!!');
    }
    this.onInputPrData.emit({
      prno: 'PR' + this.prnumber.nativeElement.value,
      glcost: this.glnumber.nativeElement.value,
      prdate: this.prdate.nativeElement.value,
      itemdesc: this.itemdescription.nativeElement.value,
      qty: this.qtynumber.nativeElement.value,
      unit: 'Sets',
      price: this.price.nativeElement.value,
      suppliername: 'IT Advance',
      duedate: this.duedate.nativeElement.value,
      remark: this.remark.nativeElement.value
    });
  }

  onKeyup(event) {
    // console.log((<HTMLInputElement>event.target).value);
    if (event.target.value.length !== 0) {
      // console.log(this.price.nativeElement.value);
      this.totalpricenumber.nativeElement.value = this.price.nativeElement.value * this.qtynumber.nativeElement.value;
    }

  }

}
