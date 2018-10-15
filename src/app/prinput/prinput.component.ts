import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PrinputdataModel } from '../shared/pr.model';
import { Currencies, Units } from '../shared/templete.model';

// Service
import { PurchaseOrderService } from '../services/pr.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-prinput',
  // host: {
  //   '(document:click)': 'handleClick($event)',
  // },
  templateUrl: './prinput.component.html',
  styleUrls: ['./prinput.component.css']
})
export class PrinputComponent implements OnInit {
  prinputdatas: PrinputdataModel[] = [];
  remarkEle: string;
  descEle: string;
  qtyEle: string;
  unitEle = Units;
  unitpriceEle: string;
  currencyEle = Currencies;
  constructor(
    private service: PurchaseOrderService, private firebaesService: FirebaseService
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  firebase = this.firebaesService.OngetCostCenter();

  itemPrAdded(event: PrinputdataModel) {
    // console.dir(JSON.stringify(event));
    this.service.putPrAdded(event)
    .subscribe(
      (response) => {
        const res = JSON.parse(response);
        console.log(res);
        if (res[0]['notice']['text'] === 'Added') {
          this.prinputdatas.push(event);
          this.remarkEle = '';
          this.descEle = '';
          this.qtyEle = '';
          this.unitEle = [];
          this.unitpriceEle = '';
          this.currencyEle = [];
        } else {
          alert('Cannot save to database or other error \n' + res[0]['notice'][1]['text']);
        }
      },
      (error) => console.log(error)
    );
  }


  // handleClick(event) {
  //   let clickedComponent = event.target;
  //   let inside = false;
  //   do {
  //     if (clickedComponent === this.elementRef.nativeElement) {
  //       inside = true;
  //     }
  //     clickedComponent = clickedComponent.parentNode;
  //   } while (clickedComponent);
  //   if (!inside) {
  //     this.filteredList = [];
  //   }
  //   this.selectedIdx = -1;
  // }

  // handleEnter() {
  //   if (this.selectedIdx > -1) {
  //     // if (this.multi) {
  //     //   this.query = '';
  //     // } else {
  //       this.glnumber = this.filteredList[this.selectedIdx];
  //     // }
  //     // this.selected.push(this.query);
  //   }
  //   this.filteredList = [];
  //   this.selectedIdx = -1;
  // }

  // select(item) {
  //   // this.selected.push(item);
  //   // if (this.multi) {
  //   //  this.query = '';
  //   // } else {
  //     this.glnumber = item;
  //   // }
  //   this.filteredList = [];
  //   this.selectedIdx = -1;
  // }

}
