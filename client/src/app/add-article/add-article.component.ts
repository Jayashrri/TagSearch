import { Component, OnInit } from '@angular/core';
import { AllTagsService } from '../all-tags.service';
import { Router } from '@angular/router';
import { AllTags } from '../tagList';
import { NewArticleService } from '../new-article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  public tagList: AllTags;
  public addedTags: string[];

  constructor(private _allTagsService: AllTagsService, private _newArticleService: NewArticleService, private _router: Router) { }

  ngOnInit(): void {
    this.addedTags = [];
    this._allTagsService.getAllTags()
      .subscribe(data => {
        this.tagList = data;
      },
        error => {
          //TODO: Error handling
        }
      );
  }

  onClick(tag: string, article: any, event: any) {
    const index = this.addedTags.indexOf(tag);
    if (index > -1) {
      this.addedTags.splice(index, 1);
      event.target.classList.remove('active');
    } else {
      this.addedTags.push(tag);
      event.target.classList.add('active');
    }
    article.setValue({ title: article.value.title, body: article.value.body, tags: this.addedTags.join(', ') });
  }

  onChange(article: any) {
    if (article.tags != "") {
      this.addedTags = article.tags.replace(/\s/g, "").replace(/,(?=,)/g, '').split(',');
    }
    if (this.addedTags[this.addedTags.length - 1] == "") {
      this.addedTags.pop();
    }
  }

  checkValid(article: any) {
    let formFields = {
      title: article.value.title.trim(),
      body: article.value.body.trim(),
      tags: article.value.tags.trim()
    };

    if (formFields.title == "") {
      article.form.controls['title'].setErrors({ 'incorrect': true });
    } else {
      article.form.controls['title'].setErrors(null);
    }
    if (formFields.body == "") {
      article.form.controls['body'].setErrors({ 'incorrect': true });
    } else {
      article.form.controls['body'].setErrors(null);
    }
  }

  onSubmit(article: any) {
    if (article.valid) {
      for (let i = 0; i < this.addedTags.length; i++) {
        this.addedTags[i] = '"' + this.addedTags[i] + '"';
      }
      let currentTags = this.addedTags.join();
      currentTags = '[' + currentTags + ']';
      this._newArticleService.addNewArticle({
        title: article.value.title,
        body: article.value.body,
        tags: currentTags
      })
        .subscribe(data => {
          this._router.navigate(['']);
        },
          error => {
          }
        );
    }
  }
}
