import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PrinputdataModel } from '../../shared/pr.model';
import { Months, Suppliers, Units, CostCenters, Currencies, Plants, Investments, BuzAreas, Requestbys } from '../../shared/templete.model';
import { TestingCompilerImpl } from '@angular/platform-browser-dynamic/testing/src/compiler_factory';
import { FirebaseService } from '../../services/firebase.service';

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
  @ViewChild('prremark') prremark: ElementRef;
  // Column 2

  // Column 3
  @ViewChild('desc') desc: ElementRef;
  @ViewChild('qty') qty: ElementRef;
  @ViewChild('unit') unit: ElementRef;
  @ViewChild('unitprice') unitprice: ElementRef;
  @ViewChild('currency') currency: ElementRef;
  // Column 3
  validate: boolean;
  months = Months;
  units = Units;
  suppliers = Suppliers;
  costcenters = CostCenters;
  currencies = Currencies;
  plants = Plants;
  prdateModel = '';
  dlvdateModel = '';
  investments = Investments;
  buzares = BuzAreas;
  requestbys = Requestbys;

  constructor(private firebaseservice: FirebaseService
  ) { }

  ngOnInit() {
  }

  onSavetoFirebase() {
    this.firebaseservice.OnSave();
  }

  itemAdded() {
    const _prtype = this.prtype.nativeElement;
    const _plant = this.plant.nativeElement;
    const _buzarea = this.buzarea.nativeElement;
    const _profit = this.profit.nativeElement;
    const _requestby = this.requestby.nativeElement;
    const _prnumber = this.prnumber.nativeElement;
    const _prdate = this.prdate.nativeElement;
    const _dlvdate = this.dlvdate.nativeElement;
    const _invnumber = this.invnumber.nativeElement;
    const _suppliername = this.suppliername.nativeElement;
    const _desc = this.desc.nativeElement;
    const _qty = this.qty.nativeElement;
    const _unit = this.unit.nativeElement;
    const _unitprice = this.unitprice.nativeElement;
    const _currency = this.currency.nativeElement;
    const _prremark = this.prremark.nativeElement;

    if (_prtype.value.length < 1) {
      _prtype.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (_plant.value.length < 1) {
      _plant.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (_buzarea.value.length < 1) {
      _buzarea.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (_profit.value.length < 1) {
      _profit.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (_requestby.value.length < 1) {
      _requestby.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (_prnumber.value.length < 1) {
      _prnumber.style.backgroundColor = 'pink';
      this.validate = false;
     }
    if (_prdate.value.length < 1) {
      _prdate.style.backgroundColor = 'pink';
      this.validate = false;
     }
    if (_dlvdate.value.length < 1) {
      _dlvdate.style.backgroundColor = 'pink';
      this.validate = false;
     }
    if (_invnumber.value.length < 1) {
      _invnumber.style.backgroundColor = 'pink';
      this.validate = false;
     }
    if (_suppliername.value.length < 1) {
      _suppliername.style.backgroundColor = 'pink';
      this.validate = false;
     }
    if (_desc.value.length < 1) {
      _desc.style.backgroundColor = 'pink';
      this.validate = false;
     }
    if (_qty.value.length < 1) {
      _qty.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (_unit.value.length < 1) {
      _unit.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (_unitprice.value.length < 1) {
      _unitprice.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (_currency.value === '0') {
      _currency.style.backgroundColor = 'pink';
      this.validate = false;
    }
    if (this.validate) {
      this.onInputPrData.emit({
        prtype: _prtype.value,
        prplant: _plant.value,
        prbuzarea: _buzarea.value,
        prprofitarea: _profit.value,
        prrequestby: _requestby.value,
        prnumber: _prnumber.value,
        prdate: _prdate.value,
        prdlvdate: _dlvdate.value,
        prinvnumber: _invnumber.value,
        prsuppliername: _suppliername.value,
        pritemdesc: _desc.value,
        prqty: _qty.value,
        prunit: _unit.value,
        prunitprice: _unitprice.value,
        prtotalprice: _qty.value * _unitprice.value,
        prcurrency: _currency.value,
        prremark: _prremark.value
      });
    }
  }

  onChange(value) {
    switch (value) {
      case 'prtype':
        this.prtype.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
        break;
      case 'plant':
        this.plant.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
        break;
      case 'buzarea':
        this.buzarea.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
        break;
      case 'profitcenter':
        this.profit.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
        break;
      case 'requestby':
        this.requestby.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
        break;
      case 'suppliername':
        this.suppliername.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
        break;
      case 'unit':
        this.unit.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
        break;
      case 'curr':
        this.currency.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
        break;
      default:
        break;
    }
  }

  OnKeyUp(id) {
    switch (id) {
      case 'prnumber':
        if (this.prnumber.nativeElement.value.length !== 9) {
          this.prnumber.nativeElement.style.backgroundColor = 'white';
          this.validate = true;
        }
        break;
      case 'prinvnumber':
        if (this.invnumber.nativeElement.value.length > 1) {
          this.invnumber.nativeElement.style.backgroundColor = 'white';
          this.validate = true;
        }
        break;
      case 'prinvnumber':
        if (this.desc.nativeElement.value.length > 1) {
          this.desc.nativeElement.style.backgroundColor = 'white';
          this.validate = true;
        }
        break;
      case 'qty':
        if ((this.qty.nativeElement.value.length > 1) && (this.qty.nativeElement.value !== 0)) {
          this.qty.nativeElement.style.backgroundColor = 'white';
          this.validate = true;
        }
        break;
      case 'unitprice':
        if ((this.unitprice.nativeElement.value.length > 1) && (this.unitprice.nativeElement.value !== 0)) {
          this.unitprice.nativeElement.style.backgroundColor = 'white';
          this.validate = true;
        }
        break;
      default:
        break;
    }
  }

  onCheckprDate(event) {
    this.prdateModel = new DatePipe('en-US').transform(this.prdate.nativeElement.value, 'yyyy-MM-dd');
    if (this.prdateModel.length === 10) {
      this.prdate.nativeElement.style.backgroundColor = 'white';
    }
    if (this.dlvdateModel.length === 10) {
      const _compareprdate = new Date(this.prdateModel);
      const _comparedlvdate = new Date(this.dlvdateModel);
      if (_compareprdate > _comparedlvdate) {
        alert('PR Date must more than Due Date!!');
        this.validate = false;
        this.prdate.nativeElement.style.backgroundColor = 'pink';
      } else if (this.prdateModel === this.dlvdateModel) {
        alert('PR Date and Due Date are the same!!');
        this.validate = false;
        this.prdate.nativeElement.style.backgroundColor = 'pink';
        this.dlvdate.nativeElement.style.backgroundColor = 'pink';
      } else {
        this.dlvdate.nativeElement.style.backgroundColor = 'white';
        this.validate = true;
      }
    }
  }

  onCheckDlvDate(event) {
    this.dlvdateModel = new DatePipe('en-US').transform(this.dlvdate.nativeElement.value, 'yyyy-MM-dd');
    if (this.dlvdateModel.length === 10) {
      this.dlvdate.nativeElement.style.backgroundColor = 'white';
      if (this.prdateModel.length === 10) {
        const _compareprdate = new Date(this.prdateModel);
        const _comparedlvdate = new Date(this.dlvdateModel);
        if (_compareprdate > _comparedlvdate) {
          this.validate = false;
          alert('Due Date is less than PR Date!!');
          this.dlvdate.nativeElement.style.backgroundColor = 'pink';
        } else if (this.prdateModel === this.dlvdateModel) {
          alert('PR Date and Due Date are the same!!');
          this.validate = false;
          this.prdate.nativeElement.style.backgroundColor = 'pink';
          this.dlvdate.nativeElement.style.backgroundColor = 'pink';
        } else {
          this.prdate.nativeElement.style.backgroundColor = 'white';
          this.validate = true;
        }
      } else {
        this.validate = false;
        this.prdate.nativeElement.style.backgroundColor = 'pink';
      }
    }
  }

  onKeyup(event) {
    // console.log((<HTMLInputElement>event.target).value);
    if (event.target.value.length !== 0) {
      // console.log(this.price.nativeElement.value);
      // this.amountprice.nativeElement.value = this.unitprice.nativeElement.value * this.qtynumber.nativeElement.value;
    }

  }

}
