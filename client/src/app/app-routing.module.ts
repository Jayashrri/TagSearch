import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SearchComponent } from './search/search.component';
import { AddArticleComponent } from './add-article/add-article.component';


const routes: Routes = [
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'list/:tag',
    component: ArticleListComponent
  },
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'add',
    component: AddArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
