import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientsService } from 'src/app/service/clients.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})


export class RegistroUsuarioComponent {
  id: number = 0;
  email: string = '';
  nombre: string = '';
  password: string = '';
  constructor(private modal: NgbModal, private register:ClientsService,private route:Router) { }
  registro()
  {
    id: this.id;
  
    const form = {
      email: this.email,
      nombre: this.nombre,
      password: this.password,
      
    }
    console.log(form);
    this.register.registerClient(form).subscribe(
      (res)=>{
        console.log(res);
        this.modal.dismissAll();
        window.alert("Usuario registrado exitosamente");
        this.route.navigate(['/menu']);
      }
    )

   

    


  }

}
