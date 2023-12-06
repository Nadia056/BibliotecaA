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
  selector: 'app-prestamos3',
  templateUrl: './prestamos3.component.html',
  styleUrls: ['./prestamos3.component.css']
})
export class Prestamos3Component {
  @ViewChild('contenido') contenido: any;
  constructor(private router:Router, private libros:BookService,private modal: NgbModal, private login:LoginService, private route:Router) { }
  selectedBook: Partial<Prestamo> = {};
  id: number | undefined;
  prestamo: Prestamo[] = [];
  mensaje: any;
  ngOnInit(): void {
    this.loadPrestamos();
  }

  editarLibro(prestamo: Prestamo) {
    this.id = prestamo.id;
    this.selectedBook = {
      id_usuario: prestamo.id_usuario,
      id_libro: prestamo.id_libro,
      cliente: prestamo.cliente,
      libro: prestamo.libro,
      fecha_devolucion: prestamo.fecha_devolucion,
      fecha_prestamo: prestamo.fecha_prestamo
    };
    this.modal.open(this.contenido);
  }

  updateBook() {
    const id = this.id || 0;
    const prestamo: Prestamo = {
      id_usuario: (this.selectedBook?.id_usuario || '') as number,
      id_libro: (this.selectedBook?.id_libro || '') as number,
      fecha_devolucion: this.selectedBook?.fecha_devolucion || '',
      fecha_prestamo: this.selectedBook?.fecha_prestamo || '',
    


    };
    console.log(prestamo);

    this.libros.updatePrestamo(id, prestamo).subscribe((res) => {
      console.log(res);
      this.modal.dismissAll();
      this.loadPrestamos(); // Update the table data after the book is updated
    });
  }

  deleteBook(prestamo: Prestamo) {
    this.libros.deletePrestamo(prestamo.id).subscribe((data: any) => {
      console.log(data);
      this.loadPrestamos(); // Update the table data after the book is deleted
    });
  }

  loadPrestamos() {
    this.libros.getPrestamos().subscribe(
      (res) => {
        console.log('Respuesta del servidor:', res);
        this.prestamo = res as any[];
      },
      (error) => {
        console.error("Error al obtener libros:", error);
      }
    );
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
}
