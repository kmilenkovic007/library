import { Component, OnInit, Input , Output, EventEmitter, HostListener} from '@angular/core';
import { BookModel } from '../models/book-model';
import { BookService } from '../book.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  private wasInside = false;
  @Input() book: BookModel;
  @Input() books: BookModel[];
  @Output() deleted = new EventEmitter();
  // ili kao input:
  @Input() reload: Function;


  // @HostListener('click')
  // clickInside() {
  //   this.wasInside = true;
  // }
  
  // @HostListener('document:click')
  // clickout() {
  //   if (!this.wasInside) {
  //     // this.reload();
  //   }
  //   this.wasInside = false;
  // }

  constructor(private bookService: BookService) {}

  delete(book:BookModel){
      this.bookService.deleteBook(book.id)
      .subscribe(() => {
        this.deleted.emit();
        this.book = null;
      });
    }
  }

    

//   
  

// @Component({
//   selector: 'chorizard',
//   template: `
//     <div *ngIf="!state" style="background-color: pink; width: 25px; height: 25px; display: inline-block;"
//         (click)="toggle()">
//     </div>
//     <div *ngIf="state" style="width: 25px; height: 25px; display: inline-block; background-color: lime"
//         (click)="toggle()">
//     </div>
//   `
// })
// export class ChorizardComponent {
//   public state = false;

//   toggle() {
//     this.state = !this.state;
//   }
  
//   constructor(private eRef: ElementRef) { }
// }

    
 

