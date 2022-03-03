import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Usuario } from '../usuarios/usuario';
import { LoginService } from './login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  vusername : string;
  vpassword : string;

  constructor(private loginService : LoginService, public globals : Globals,public _router : Router) { }

  ngOnInit(): void {
  }

  login(){

    this.loginService.getUsuarioByLogin(this.vusername,this.vpassword).subscribe(
      (vusuario) => {
        this.globals.userLogeado = vusuario;
        this.globals.loggeado = true;
        this._router.navigate(['/Usuarios'])
      }
    )

  }

}
