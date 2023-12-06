import { Component } from '@angular/core';
import { Cliente } from 'src/app/Models/clientes';
import { Prestamo } from 'src/app/Models/prestamo';
import { BookService } from 'src/app/service/book.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-prestamos2',
  templateUrl: './prestamos2.component.html',
  styleUrls: ['./prestamos2.component.css']
})
export class Prestamos2Component {
  constructor(private boo:BookService, private login:LoginService) { }
  book: any[] = [];
  prestamo:Partial<Prestamo>={};
  clients:any[]=[];

  ngOnInit(): void {
    this.boo.getBooks().subscribe(
      (res) => {
        console.log('Respuesta del servidor:', res);
        this.book = res as any[];
      },
      (error) => {
        console.error("Error al obtener libros:", error);
      }
    );
    this.boo.getClients().subscribe(
      (res) => {
        console.log('Respuesta del servidor:', res);
        this.clients = res as any[];
      },
      (error) => {
        console.error("Error al obtener libros:", error);
      }
    );
  }
  registro() {
    console.log(this.prestamo);
    this.boo.prestamo(this.prestamo).subscribe(
      (res) => {
        console.log('Respuesta del servidor:', res);
  
        // Verificar si la respuesta tiene un código de estado 200
        if (res === 200) {
          // Mostrar un mensaje de éxito
         window.alert('Prestamo registrado exitosamente');
          // Limpiar el formulario o reiniciar el objeto prestamo
          this.prestamo = {}; // Puedes reiniciar el objeto o realizar las acciones necesarias para limpiar el formulario
        } else {
          // Manejar otros códigos de estado o condiciones según sea necesario
         window.alert('Error al registrar el prestamo');
        }
      },
      (error) => {
        console.error("Error al agregar préstamo:", error);
      }
    );
  }
  
logout()
{
    
    this.login.logout().subscribe(
      (res)=>{
  
        alert(res.message);
        localStorage.removeItem('token');
        
      }
    )
  

}
}
