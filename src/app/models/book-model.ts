import { AuthorModel } from './author-model';


export class BookModel {
  id: number;
  imageUrl: string;
  pages: number;
  title: string;
  year: number;
  quantity: number;
  authorId: number;
  author:AuthorModel;

  constructor(book){
    this.id = book.id;
    this.imageUrl = book.imageUrl;
    this.pages = book.pages;
    this.title = book.title;
    this.year = book.year;
    this.quantity = book.quantity;
    this.author = new AuthorModel(book.author);
    this.authorId = book.authorId;

    // this.author = {
    //   name : book.author.name;
    //   id: book.author.id;
    // };
    

  }

}