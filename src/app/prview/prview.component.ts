import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../services/pr.service';

@Component({
  selector: 'app-prview',
  templateUrl: './prview.component.html',
  styleUrls: ['./prview.component.css']
})
export class PrviewComponent implements OnInit {

  constructor(private service: PurchaseOrderService) { }
  prsearchresult;

  ngOnInit() {
  }

  prsearch() {
    this.service.prsearch()
    .subscribe(
      (res: any[]) => console.log(res),
      (error) => console.log(error)
    );
  }

}
