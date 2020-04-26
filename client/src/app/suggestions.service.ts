import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TagList } from './tagList';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  private _url: string = "/api/searchSuggestions";

  constructor(private http: HttpClient) { }

  getSuggestions(searchString: string): Observable<TagList> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const body = {
      search: searchString
    };
    return this.http.post<TagList>(this._url, body, config);
  }
}
