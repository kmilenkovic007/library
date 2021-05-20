import { Component, OnInit, Output } from '@angular/core';
import { AuthorModel } from '../models/author-model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthorService } from '../author.service';

@Component({
  selector: 'add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})
export class AddAuthorComponent implements OnInit {
  author = new AuthorModel({});
  getAuthors: Function;
  constructor(public bsModalRef: BsModalRef, private authorService: AuthorService) { }

  ngOnInit(): void {
  }


  save(author){
    this.authorService.addAuthor(author).subscribe(_ =>
      { 
        this.getAuthors();
        this.bsModalRef.hide();
      });
  }

}
