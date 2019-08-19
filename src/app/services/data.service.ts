import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
// Typescript custom enum for search types (optional)
export enum SearchType {}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // url = 'https://api.github.com/search/repositories?per_page=5&q=react';
  url = 'https://api.github.com/search/repositories';
 
  constructor(private http: HttpClient) { }

  /**
  * Get data from the API 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
 searchData(title: string, type: SearchType): Observable<any> {
  console.log('----- searchData from ' + this.url);
  console.log('----- searchData title ' + title);
  console.log('----- searchData type ' + type);
  
  let urlPost = this.url + '?per_page=10&q=' + title;
  console.log('----- urlPost',urlPost);

  return this.http.get(urlPost)
  .pipe(
  // map(results => console.log('----- results',results['total_count']))
      map(results => results['items'])
  );

}

}
