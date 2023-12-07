import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Models/book';
import { BookService } from 'src/app/service/book.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {
  @ViewChild('bookForm', { static: false }) libroForm: any;

  formulario: FormGroup;
  constructor(private libro: BookService, private router:Router, private login:LoginService, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      titulo: [""],
      autor: [""],
      editorial: [""],
      year: [""],
      genero: [""],
      codigo: [""],
      estado: [""]
    });
  }

  ngOnInit(){
  }
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
      if (response === 401) {
        window.alert('Book already exists');
      }
      if (response === 200) {
        window.alert('Book registered successfully');
        this.router.navigate(['/biblioteca']);
        window.location.reload();
      }
    });
    this.formulario.reset()
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


