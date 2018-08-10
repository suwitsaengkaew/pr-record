import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Months, Suppliers, Units, GLs } from '../shared/templete.model';
import { PrinputdataModel } from '../shared/pr.model';

@Component({
  selector: 'app-prinput',
  // host: {
  //   '(document:click)': 'handleClick($event)',
  // },
  templateUrl: './prinput.component.html',
  styleUrls: ['./prinput.component.css']
})
export class PrinputComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSaveDataEmit = new EventEmitter<PrinputdataModel>();
  @ViewChild('prnumber') prnumber: ElementRef;
  @ViewChild('qtynumber') qtynumber: ElementRef;
  @ViewChild('glnumber') glnumber: ElementRef;
  @ViewChild('unitpricenumber') unitpricenumber: ElementRef;
  @ViewChild('prdate') prdate: ElementRef;
  @ViewChild('itemdescription') itemdescription: ElementRef;
  @ViewChild('duedate') duedate: ElementRef;
  @ViewChild('remark') remark: ElementRef;

  // glnumber = '';
  filteredList = [];
  selected = [];
  costAutoComplete = false;
  months = Months;
  suppliers = Suppliers;
  units = Units;
  glCosts = GLs;
  selectedIdx: number;
  mon = '';
  sup = '';
  unitprice = '';


  constructor(private elementRef: ElementRef) {
    this.mon = 'Month';
    this.sup = 'Supplier List';
    this.unitprice = 'Units';
  }

  ngOnInit() {
  }

  itemAdded() {
    // console.log(prrecord);
    this.onSaveDataEmit.emit({
      prno: this.prnumber.nativeElement.value ,
      glcost: this.glnumber.nativeElement.value,
      prdate: this.prdate.nativeElement.value,
      itemdesc: this.itemdescription.nativeElement.value,
      qty: this.qtynumber.nativeElement.value,
      unit: 'Sets',
      price: this.unitpricenumber.nativeElement.value,
      suppliername: 'IT Advance',
      duedate: this.duedate.nativeElement.value,
      remark: this.remark.nativeElement.value
  });
    // console.log('Item Added');
    // console.log(this.mon);
  }

  onCostKeyup(event: any) {
    // console.log((<HTMLInputElement>event.target).value);
    // if (this.glnumber.length === 0) {
    //   this.costAutoComplete = false;
    //   this.filteredList = this.glCosts.filter((filter) => {
    //     return filter.gl.toLowerCase().indexOf(this.glnumber.toLowerCase()) > -1;
    //   });
    //   if (event.code === 'ArrowDown' && this.selectedIdx < this.filteredList.length) {
    //     this.selectedIdx++;
    //   } else if (event.code === 'ArrowUp' && this.selectedIdx > 0) {
    //     this.selectedIdx--;
    //   } else if (event.code === 'Enter') {
    //     this.handleEnter();
    //   }
    // } else {
    //   this.costAutoComplete = true;
    // }
  }

  handleClick(event) {
    let clickedComponent = event.target;
    let inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (!inside) {
      this.filteredList = [];
    }
    this.selectedIdx = -1;
  }

  handleEnter() {
    if (this.selectedIdx > -1) {
      // if (this.multi) {
      //   this.query = '';
      // } else {
        this.glnumber = this.filteredList[this.selectedIdx];
      // }
      // this.selected.push(this.query);
    }
    this.filteredList = [];
    this.selectedIdx = -1;
  }

  select(item) {
    // this.selected.push(item);
    // if (this.multi) {
    //  this.query = '';
    // } else {
      this.glnumber = item;
    // }
    this.filteredList = [];
    this.selectedIdx = -1;
  }

}
