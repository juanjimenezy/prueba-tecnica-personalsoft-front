import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import Swal from 'sweetalert2';
import { Globals } from '../globals';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : Usuario[];
  constructor(private usuarioService : UsuarioService, private globals : Globals,private router: Router) { }

  ngOnInit(): void {
    if(!this.globals.loggeado){
      this.router.navigate(['/Login'])
    }else
    this.usuarioService.findAll().subscribe(
      (usuario) => {
        this.usuarios = usuario;
      }
    );
  }


  delete( usuario : Usuario){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
    title: 'Esta seguro?',
    text: `¿Seguro que desea eliminar al usuario ${usuario.nombre}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminar!',
    cancelButtonText: 'No, cancelar!',
    reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(usuario.id).subscribe(
          response => {
            this.usuarios = this.usuarios.filter(usu => usu !== usuario)
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `${usuario.nombre} ${usuario.apellido} Ha sido eliminado`,
              'success'
            )
          }
        )

      }
})

  }

}
