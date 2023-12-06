import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BibliotecaMenuComponent } from './components/biblioteca-menu/biblioteca-menu.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistroLibroComponent } from './components/registro-libro/registro-libro.component';
import { Prestamos2Component } from './components/prestamos2/prestamos2.component';
import { Prestamos3Component } from './components/prestamos3/prestamos3.component';
import { PrestamosComponent } from './components/client/prestamos/prestamos.component';
import { MenuComponent as menu } from './components/client/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroUsuarioComponent,
    BibliotecaMenuComponent,
    NotfoundComponent,
    RegistroLibroComponent,
     Prestamos2Component,
     Prestamos3Component,
     PrestamosComponent,
      menu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
