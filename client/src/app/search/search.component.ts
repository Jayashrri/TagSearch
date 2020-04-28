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

  onChange(search: any) {
    if (search.searchBar != "") {
      let jsonString: string[] = search.searchBar.replace(/\s/g, "").replace(/,(?=,)/g, '').split(',');
      for (let i = 0; i < jsonString.length; i++) {
        jsonString[i] = '"' + jsonString[i] + '"';
      }
      if (jsonString[jsonString.length - 1] == '""') {
        jsonString.pop();
      }

      let searchString = jsonString.join();
      searchString = '[' + searchString + ']';
      this._suggestionService.getSuggestions(searchString)
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

  onSearch(searchBar: any) {
    let searchString: string = searchBar.value.replace(/\s/g, "").split(',').join('&');
    if (searchString != "") {
      this._router.navigate(['list', searchString]);
    }
  }

  onClick(selected: string[], searchBar: any) {
    searchBar.value = selected.join(', ');
    searchBar.focus();
  }

  checkEmpty() {
    if (this.tagList && this.tagList.data.length == 0)
      return true;
  }

}
