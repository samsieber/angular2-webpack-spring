import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Language} from "./language";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class LanguageService {

    private languagesUrl = '/api/languages';

    constructor(private http: Http) {
    }

    getLanguages(): Observable<Language[]> {
        return this.http.get(this.languagesUrl)
            .map(this.extractLanguages)
            .catch(this.handleError);
    }

    private extractLanguages(res: Response): Language[] {
        return res.json()._embedded.languages;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
