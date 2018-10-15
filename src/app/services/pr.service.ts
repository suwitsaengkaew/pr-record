import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { PrinputdataModel } from '../shared/pr.model';

@Injectable()
export class PurchaseOrderService {
    private Url = 'http://info.ytmt.co.th/';
    constructor(
        private http: Http
    ) {}

    putPrAdded(prinputdata: PrinputdataModel) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const _Url = this.Url + 'pr/prinputrecord';
        return this.http.put(_Url, JSON.stringify(prinputdata).toString()).map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }

    prsearch() {
        const _Url = this.Url + 'pr/prsearch';
        return this.http.get(_Url)
        .map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }

    putPrAddedFirebase(prinputdata: PrinputdataModel) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const _Url = this.Url + 'pr/prinputrecord';
        return this.http.put(_Url, JSON.stringify(prinputdata).toString()).map(
            (response: Response) => {
                const data = response.json();
                return data;
            }
        );
    }
}
