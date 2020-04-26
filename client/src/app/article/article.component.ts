import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public article: Article;
  private _id: string;

  constructor(private _articleService: ArticleService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.params
      .subscribe(params => {
        this._id = params['id'];
      });

    this._articleService.getArticles(this._id)
      .subscribe(data => {
        if (data.data == null) {
          this._router.navigate(['list']);
        }
        this.article = data;
      },
        error => {
          //TODO: Error handling
        }
      );
  }

}
