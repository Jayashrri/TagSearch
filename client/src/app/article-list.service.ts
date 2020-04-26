import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleList } from './articleList';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {

  private _url: string = "/api/getAllArticles";

  constructor(private http: HttpClient) { }

  getAllArticles(tagName: string): Observable<ArticleList> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const body = {
      tag: tagName
    };
    return this.http.post<ArticleList>(this._url, body, config);
  }
}
