import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { CostCenters, Suppliers } from '../shared/templete.model';

@Injectable()
export class FirebaseService {
    constructor(private http: Http) {}

    OnSave() {
        const costcenter = CostCenters;
        const _headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.put('https://exhe-gsuite.firebaseio.com/costcenter.json', costcenter, {headers : _headers} )
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    OnSaveSuppliers() {
        const suppliers = Suppliers;
        const _headers = new Headers({ 'Content-Type': 'application/json' });
        this.http.put('https://exhe-gsuite.firebaseio.com/suppliers.json', suppliers, {headers : _headers} )
        .subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }


}
