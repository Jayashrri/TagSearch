import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewArticle } from './article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewArticleService {

  private _url: string = "/api/newArticle";

  constructor(private _http: HttpClient) { }

  addNewArticle(article: NewArticle) {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this._http.post<any>(this._url, article, config);
  }
}
