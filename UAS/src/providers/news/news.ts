import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const API:string = "http://newsapi.org/v2/top-headlines?country=id&apiKey=d90eab2bdd53406ea87463fd85f5e4e0";
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient ) {
}
  getNews(){
    return this.http.get(API);
  }
}
