import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { PrinputdataModel } from '../../shared/pr.model';
import { Months, Suppliers, Units, CostCenters, Currencies, Plants, Investments, BuzAreas, Requestbys } from '../../shared/templete.model';

// For Example in case of use Directive //
// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: '[focus]'
// })
// class FocusDirective {
//   @Input() focus: boolean;
//   constructor(@Inject(ElementRef) private element: ElementRef) {}
//   // tslint:disable-next-line:use-life-cycle-interface
//   protected ngOnChanges() {
//     this.element.nativeElement.focus();
//   }
// }

@Component({
  selector: 'app-prinputform',
  templateUrl: './prinputform.component.html',
  styleUrls: ['./prinputform.component.css']
})
export class PrinputformComponent implements OnInit {
    // tslint:disable-next-line:no-output-on-prefix
  @Output() onInputPrData = new EventEmitter<PrinputdataModel>();
  @Output() ServiceClick = new EventEmitter<String>();

  // Column 1
  @ViewChild('prtype') prtype: ElementRef;
  @ViewChild('plant') plant: ElementRef;
  @ViewChild('buzarea') buzarea: ElementRef;
  @ViewChild('profit') profit: ElementRef;
  @ViewChild('requestby') requestby: ElementRef;
  // Column 1

  // Column 2
  @ViewChild('prnumber') prnumber: ElementRef;
  @ViewChild('prdate') prdate: ElementRef;
  @ViewChild('dlvdate') dlvdate: ElementRef;
  @ViewChild('invnumber') invnumber: ElementRef;
  @ViewChild('suppliername') suppliername: ElementRef;
  // Column 2

  // Column 3
  @ViewChild('desc') desc: ElementRef;
  @ViewChild('qty') qty: ElementRef;
  @ViewChild('unit') unit: ElementRef;
  @ViewChild('unitprice') unitprice: ElementRef;
  @ViewChild('currency') currency: ElementRef;
  // Column 3

  months = Months;
  units = Units;
  suppliers = Suppliers;
  costcenters = CostCenters;
  currencies = Currencies;
  plants = Plants;
  investments = Investments;
  buzares = BuzAreas;
  requestbys = Requestbys;

  constructor(
  ) {}

  ngOnInit() {
  }

  itemAdded() {
    const _prtype = this.prtype.nativeElement.value;
    const _plant = this.plant.nativeElement.value;
    const _buzarea = this.buzarea.nativeElement.value;
    const _profit = this.profit.nativeElement.value;
    const _requestby = this.requestby.nativeElement.value;
    const _prnumber = this.prnumber.nativeElement.value;
    const _prdate = this.prdate.nativeElement.value;
    const _dlvdate = this.dlvdate.nativeElement.value;
    const _invnumber = this.invnumber.nativeElement.value;
    const _suppliername = this.suppliername.nativeElement.value;
    const _desc = this.desc.nativeElement.value;
    const _qty = this.qty.nativeElement.value;
    const _unit = this.unit.nativeElement.value;
    const _unitprice = this.unitprice.nativeElement.value;
    const _currency = this.currency.nativeElement.value;


    // if (_prnumber.length !== 9 ) { // PR Number
    //   alert('Please check PR Number!!');
    //   this.prnumber.nativeElement.focus();
    // } else if (_costcenter === 'Cost Center') { // Cost Center
    //   alert('Please select your cost center!!');
    //   this.costcenterbutton.nativeElement.focus();
    // } else if (_glnumber.length < 7 ) { // GL Number
    //   alert('Please check GL Number!!');
    //   this.glnumber.nativeElement.focus();
    // } else if (_prdate.length !== 10) { // PR Date
    //   alert('Please input PR Issue Date!!');
    //   this.prdate.nativeElement.focus();
    // } else if (_itemdescription < 1) { // Item Description
    //   alert('Please input description!!');
    //   this.itemdescription.nativeElement.focus();
    // } else if (_unitprice.length < 1) { // Unit Price
    //   alert('Please input unit price!!');
    //   this.unitprice.nativeElement.focus();
    // } else if (_qty.length < 1) { // Qty
    //   alert('Please input quantity of item!!');
    //   this.qtynumber.nativeElement.focus();
    // } else if (_unit === 'Unit') { // Unit
    //   alert('Please select unit type!!');
    //   this.unitbutton.nativeElement.focus();
    // } else if (_suppliername === 'Supplier') { // Supplier Name
    //   alert('Please select supplier name!!');
    //   this.supplierbutton.nativeElement.focus();
    // } else if (_duedate.length !== 10) { // Due Date
    //     alert('Please input PR Issue Date!!');
    //     this.duedate.nativeElement.focus();
    // } else {
     this.onInputPrData.emit({
        prtype: _prtype,
        prplant: _plant,
        prbuzarea: _buzarea,
        prprofitarea: _profit,
        prrequestby: _requestby,
        prnumber: _prnumber,
        prdate: _prdate,
        prdlvdate: _dlvdate,
        prinvnumber: _invnumber,
        prsuppliername: _suppliername,
        pritemdesc: _desc,
        prqty: _qty,
        prunit: _unit,
        prunitprice: _unitprice,
        prtotalprice: 3000,
        prcurrency: _currency,
        prremark: 'remark'
     });
    // }
  }

  onKeyup(event) {
    // console.log((<HTMLInputElement>event.target).value);
    if (event.target.value.length !== 0) {
      // console.log(this.price.nativeElement.value);
      // this.amountprice.nativeElement.value = this.unitprice.nativeElement.value * this.qtynumber.nativeElement.value;
    }

  }

}
