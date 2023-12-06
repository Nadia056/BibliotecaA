import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Models/book';
import { BookService } from 'src/app/service/book.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent {
  @ViewChild('bookForm', { static: false }) libroForm: any;

  constructor(private libro: BookService, private router:Router, private login:LoginService) {}

  book = {
    titulo: '',
    autor: '',
    editorial: '',
    year: '',
    genero: '',
    codigo: '',
    estado: ''
  };

  registro() {
    console.log(this.book);
    this.libro.bookStore(this.book).subscribe(response => {
      console.log(response);

      if (response === 401) {
        window.alert('Book already exists');
        this.libroForm.reset();
      }
      if (response === 200) {
        window.alert('Book registered successfully');
        this.libroForm.reset();
        this.router.navigate(['/biblioteca']);
      }
    });
  }
  logout()
  {
    
    this.login.logout().subscribe(
      (res)=>{

        alert(res.message);
        this.router.navigate(['/menu']);
        localStorage.removeItem('token');
        
      }
    )

  }
}


