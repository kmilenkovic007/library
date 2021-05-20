

export class AuthorModel {
  id: number
  name: string;
  yearOfBirth: number;

  constructor(author){
    author = author || {};
    this.id = author.id;
    this.name = author.name;
    this.yearOfBirth = author.yearOfBirth;

  }
}