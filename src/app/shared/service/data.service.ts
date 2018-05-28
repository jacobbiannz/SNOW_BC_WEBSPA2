import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import { Guid } from '../../../guid';
//import { SecurityService } from './security.service';

// Implementing a Retry-Circuit breaker policy 
// is pending to do for the SPA app
@Injectable()
export class DataService {
    //constructor(private http: Http, private securityService: SecurityService) { }
    constructor(private http: Http) {
    }

    get(url: string, params?: any): Observable<Response> {
        let options: RequestOptionsArgs = {};
        
        // if (this.securityService) {
        //     options.headers = new Headers();
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        // }
        options.headers = new Headers();
        //console.log("----------------------------dataservice--" + url + "--dataservice------------------------");
        return this.http.get(url, options).map(
            (res: Response) => {
                //console.log("----------------------------dataservicereturn--" +res+ "--dataservice------------------------");
                return res;
            }).catch(this.handleError);
    }

    /*
    postWithId(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, true, params);
    }
    */

    post(url: string, data: any, params?: any): Observable<Response> {
        return this.doPost(url, data, false, params);
    }

    putWithId(url: string, data: any, params?: any): Observable<Response> {
        
        return this.doPut(url, data, false, params);
    }


    private doPost(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        let options: RequestOptionsArgs = {};

        options.headers = new Headers();
        options.headers.append("Content-Type", "application/json");
        options.headers.append("Accept", "application/json");

        // if (this.securityService) {
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        // }
        // if (needId) {
        //     let guid = Guid.newGuid();
        //     options.headers.append('x-requestid', guid);
        // }
        
       
        return this.http.post(url, data, options).map(
            (res: Response) => {
                return res;
            }).catch(this.handleError);
    }



    private doPut(url: string, data: any, needId: boolean, params?: any): Observable<Response> {
        let options: RequestOptionsArgs = {};

        options.headers = new Headers();
        options.headers.append("Content-Type", "application/json");
        options.headers.append("Accept", "application/json");

        //options.headers.append('Access-Control-Allow-Headers', 'Content-Type'); 

        
        // if (this.securityService) {
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());                                                                                                                                                               
        // }
        
        // if (needId) {
        //     let guid = Guid.newGuid();
        //     options.headers.append('x-requestid', guid);
        // }
        
       
        //console.log(options);
        //console.log(options +'------------------------here2---------------------' + JSON.stringify(data));
        return this.http.put(url, data, options).map(
            (res: Response) => {
                return res;
            }).catch(this.handleError);
    }


/*
    delete(url: string, params?: any) {
        let options: RequestOptionsArgs = {};

        
        // if (this.securityService) {
        //     options.headers = new Headers();
        //     options.headers.append('Authorization', 'Bearer ' + this.securityService.GetToken());
        // }
        

        console.log('data.service deleting');
        // return this.http.delete(url, options).subscribe(
        //        return res;
        //    );

        this.http.delete(url, options).subscribe((res) => {
            console.log('deleted');
        });
    }
*/
    private handleError(error: any) {
        console.error('server error:', error);
        if (error instanceof Response) {
            let errMessage = '';
            try {
                errMessage = error.json();
            } catch (error) {
                errMessage = error.statusText;
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'server error');
    }
}
