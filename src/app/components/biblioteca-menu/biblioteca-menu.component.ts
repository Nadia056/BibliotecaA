import { Component, ViewChild } from '@angular/core';
import { Book } from 'src/app/Models/book'; 

import { OnInit } from '@angular/core';
import Echo from 'laravel-echo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-biblioteca-menu',
  templateUrl: './biblioteca-menu.component.html',
  styleUrls: ['./biblioteca-menu.component.css']
})
export class BibliotecaMenuComponent {
  @ViewChild('contenido') contenido: any;
  constructor(private router:Router, private libros:BookService,private modal: NgbModal, private login:LoginService, private route:Router) { }
  selectedBook: Partial<Book> = {};
  id: number | undefined;
  books: Book[] = [];
  mensaje: any;
  pollInterval: number = 5000;
  ngOnInit(): void {
    this.startLongPolling();
    this.loadBooks();
  }

  editarLibro(book: Book) {
    this.id = book.id;
    this.selectedBook = {
      titulo: book.titulo,
      autor: book.autor,
      editorial: book.editorial,
      year: book.year,
      genero: book.genero,
      codigo: book.codigo,
      estado: book.estado,
    };
    this.modal.open(this.contenido);
  }

  updateBook() {
    const id = this.id || 0;
    const book: Book = {
      titulo: this.selectedBook?.titulo || '',
      autor: this.selectedBook?.autor || '',
      editorial: this.selectedBook?.editorial || '',
      year: this.selectedBook?.year || '',
      genero: this.selectedBook?.genero || '',
      codigo: this.selectedBook?.codigo || '',
      estado: this.selectedBook?.estado || '',


    };

    this.libros.updateBook(id, book).subscribe((res) => {
      console.log(res);
      this.modal.dismissAll();
      this.loadBooks(); // Update the table data after the book is updated
    });
  }

  deleteBook(book: Book) {
    this.libros.deleteBook(book.id).subscribe((data: any) => {
      console.log(data);
      this.loadBooks(); // Update the table data after the book is deleted
    });
  }

  loadBooks() {
    this.libros.getBooks().subscribe((data: any) => {
      this.books = data;
      console.log(this.books, 'libros');
    });
  }

  logout()
    {
      
      this.login.logout().subscribe(
        (res)=>{
  
          alert(res.message);
          this.route.navigate(['/menu']);
          localStorage.removeItem('token');
          
        }
      )
  
    }
    startLongPolling() {
      const poll = () => {
        this.libros.getBooks().subscribe((data: any) => {
          this.books = data;
          console.log(this.books, 'libros');
          setTimeout(poll, this.pollInterval); // Start the next long polling request after the specified interval
        });
      };
      poll();
    }
}
