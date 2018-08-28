import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { PrinputdataModel } from '../shared/pr.model';

@Injectable()
export class PurchaseOrderService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = '';
    private Url = 'http://info.ytmt.co.th/';
    constructor(
        private http: Http
    ) {}

    helloWorld(prinputdata: PrinputdataModel) {
        const _Url = this.Url + 'pr/prinputrecord';
        return this.http.put(_Url, JSON.stringify(prinputdata))
        .subscribe(
            status => { console.log('Status -> ', status); },
            err => { console.log('Err -> ', err); },
          );
    }
}