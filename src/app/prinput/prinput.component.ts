import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PrinputdataModel } from '../shared/pr.model';

// Service
import { PurchaseOrderService } from '../services/pr.service';

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
  @Input() prinputdata = new EventEmitter<PrinputdataModel>();

  prinputdatas: PrinputdataModel[] = [];

  constructor(
    private service: PurchaseOrderService
  ) {}

  ngOnInit() {
  }

  itemPrAdded(event: PrinputdataModel) {
    this.service.helloWorld(event)
    .toPromise()
    .then(
      status => {
        const _state = JSON.parse(status.text());
        if ( (_state[0]['notice']['text']) === 'Added' ) {
          this.prinputdatas.push(event);
        }
      })
      .catch(
        err => {
          console.log('Err -> ', err);
        }
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
