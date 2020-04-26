import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './article.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
