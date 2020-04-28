import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllTags } from './tagList';

@Injectable({
  providedIn: 'root'
})
export class AllTagsService {

  private _url: string = "/api/newArticle";

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<AllTags> {
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.get<AllTags>(this._url,config);
  }
}
