import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Months, Suppliers, Units, GLs } from '../shared/templete.model';


@Component({
  selector: 'app-prinput',
  templateUrl: './prinput.component.html',
  styleUrls: ['./prinput.component.css']
})
export class PrinputComponent implements OnInit {
// tslint:disable-next-line:no-output-on-prefix
@Output() onSaveDataEmit = new EventEmitter<string>();

  glnumber = '';
  costAutoComplete = false;
  months = Months;
  suppliers = Suppliers;
  units = Units;
  glCosts = GLs;
  mon = '';
  sup = '';
  unitprice = '';


  constructor() {
    this.mon = 'Month';
    this.sup = 'Supplier List';
    this.unitprice = 'Units';
  }

  ngOnInit() {
  }

  itemAdded(prdata: string) {
    this.onSaveDataEmit.emit(prdata);
    // console.log('Item Added');
    // console.log(this.mon);
  }

  onCostKeyup(event: Event) {
    console.log((<HTMLInputElement>event.target).value);
    if (this.glnumber.length === 0) {
      this.costAutoComplete = false;
    } else {
      this.costAutoComplete = true;
    }
  }

}
