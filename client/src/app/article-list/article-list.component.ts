import { Component, OnInit } from '@angular/core';
import { ArticleList } from '../articleList';
import { ArticleListService } from '../article-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articleList: ArticleList;
  private _tag: string;

  constructor(private _articleListService: ArticleListService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.params
      .subscribe(params => {
        this._tag = params['tag'];
      });

    this._articleListService.getAllArticles(this._tag)
      .subscribe(data => {
        this.articleList = data;
      },
        error => {
          //TODO: Error handling
        }
      );
  }

}
