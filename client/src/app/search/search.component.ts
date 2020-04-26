import { Component, OnInit } from '@angular/core';
import { TagList } from '../tagList';
import { SuggestionsService } from '../suggestions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public tagList: TagList;

  constructor(private _suggestionService: SuggestionsService, private _router: Router) { }

  ngOnInit(): void { }

  onChange(selected: string) {
    if (selected != "") {
      this._suggestionService.getSuggestions(selected)
        .subscribe(data => {
          this.tagList = data;
        },
          error => {
            //TODO: Error handling
          }
        );
    }
    else {
      this.tagList = null;
    }
  }

}
