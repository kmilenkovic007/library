import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';


const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {path: 'books', component: BooksComponent},
  {path: 'authors', component: AuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
