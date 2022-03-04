import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './usuario';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public usuario : Usuario = new Usuario();
  constructor(private usuarioService : UsuarioService, private router: Router,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.usuarioService.findById(id).subscribe(
          (user) => {
            this.usuario = user;
            

          }
        )
      }
    }
    )
  }




}
