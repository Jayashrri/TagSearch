import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private _url: string = "/api/getArticle";

  constructor(private http: HttpClient) { }

  getArticles(articleId: string): Observable<Article> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const body = {
      id: articleId
    };
    
    return this.http.post<Article>(this._url, body, config);
  }
}
