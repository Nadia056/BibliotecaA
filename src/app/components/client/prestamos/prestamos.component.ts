import { Component, ViewChild } from '@angular/core';
import { Book } from 'src/app/Models/book'; 

import { OnInit } from '@angular/core';
import Echo from 'laravel-echo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { LoginService } from 'src/app/service/login.service';
import { Prestamo } from 'src/app/Models/prestamo';


@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent {
    @ViewChild('contenido') contenido: any;
    constructor(private router:Router, private libros:BookService,private modal: NgbModal, private login:LoginService, private route:Router) { }
    selectedBook: Partial<Prestamo> = {};
    id: number | undefined;
    books: Prestamo[] = [];
    mensaje: any;
    pollInterval: number = 8000;


    ngOnInit(): void {
      this.startLongPolling();
    }
    
    loadBooks() {
      this.libros.oneprestamo().subscribe((data: any) => {
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
          this.libros.oneprestamo().subscribe((data: any) => {
            this.books = data;
            console.log(this.books, 'libros');
            setTimeout(poll, this.pollInterval); // Start the next long polling request after the specified interval
          });
        };
        poll(); // Start the initial long polling request
      }
      
}
