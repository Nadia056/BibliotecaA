import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private p6:LoginService,private route:Router) { }
  email='';
  password='';
  onSubmit()
  {
    const form={
      email:this.email,
      password:this.password
    }
    console.log(form);
    //si es admin que vaya a la ruta de admin
    //si es cliente que vaya a la ruta de cliente
    this.p6.login(form).subscribe(
      (res)=>{
        console.log(res);
        if(res.role==1)
        {
          this.route.navigate(['/biblioteca']);
        }
        else
        {
          this.route.navigate(['/menu2']);
        }
        localStorage.setItem('token',res.token);
        localStorage.setItem('id',res.id);
      }
    )
  }
}
