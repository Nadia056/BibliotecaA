import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BibliotecaMenuComponent } from './components/biblioteca-menu/biblioteca-menu.component';
import { RegistroLibroComponent } from './components/registro-libro/registro-libro.component';
import { Prestamos2Component } from './components/prestamos2/prestamos2.component';
import { Prestamos3Component } from './components/prestamos3/prestamos3.component';
import { PrestamosComponent } from './components/client/prestamos/prestamos.component';
import { MenuComponent as menu } from './components/client/menu/menu.component';
const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'registro', component: RegistroUsuarioComponent },
  {path:'notfound', component: NotfoundComponent},
  {path:'biblioteca', component: BibliotecaMenuComponent},
  {path:'registroLibro', component: RegistroLibroComponent},
  {path:'prestamos', component: Prestamos2Component},
  {path:'prestamos2', component: Prestamos3Component},
  {path:'prestamos3', component: PrestamosComponent},
  {path:'menu2', component: menu},
  {path:'**', redirectTo:'notfound', pathMatch:'full'}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
