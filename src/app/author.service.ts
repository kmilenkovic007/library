import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Authors } from './mock-authors';
import { AuthorModel } from './models/author-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<AuthorModel[]>{
      return this.http.get<AuthorModel[]>(`http://localhost:3333/authors?_sort=name&_order=asc&_authorId=1`);
    }
  
  addAuthor(author): Observable<AuthorModel>{
    return this.http.post<AuthorModel>(`http://localhost:3333/authors`, author);
  }

  deleteAuthor(id: number){
      return this.http.delete('http://localhost:3333/authors/'+ id);
    }


}

  


