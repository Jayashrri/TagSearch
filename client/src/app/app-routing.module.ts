import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';


const routes: Routes = [
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'list/:tag',
    component: ArticleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
