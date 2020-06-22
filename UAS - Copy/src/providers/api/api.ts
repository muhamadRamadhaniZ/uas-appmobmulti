import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  API_KEY: 'd90eab2bdd53406ea87463fd85f5e4e0';
  API_URL: 'http://newsapi.org/v2/';

  constructor(public http: HttpClient){}

}
