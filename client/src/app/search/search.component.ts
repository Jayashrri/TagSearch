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
  public listString: string[];

  constructor(private _suggestionService: SuggestionsService, private _router: Router) { }

  ngOnInit(): void { }

  onChange(selected: string) {
    if (selected != "") {
      let jsonString: string[] = selected.replace(/\s/g, "").split(',');
      for (let i = 0; i < jsonString.length; i++) {
        jsonString[i] = '"' + jsonString[i] + '"';
      }
      let searchString = jsonString.join();
      searchString = '[' + searchString + ']';
      this._suggestionService.getSuggestions(searchString)
        .subscribe(data => {
          this.tagList = data;
          this.listString = [];
          data.data.forEach(data => {
            this.listString.push(data.name.join('&'));
          });
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
