import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { SearchComponent } from './search/search.component';


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
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
