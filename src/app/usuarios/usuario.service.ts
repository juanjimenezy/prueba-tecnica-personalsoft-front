import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable,catchError,throwError } from 'rxjs';
import { Globals } from '../globals';
import { Usuario } from './usuario';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private  http: HttpClient,private globals : Globals) { }


  register(usuario : Usuario) : Observable<Usuario> {
    return this.http.put<Usuario>(`${this.globals.urlUsuarios}`,usuario).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error' , e.error.mensaje,'error');
        return  throwError(e);
      })
    );
  };

  findAll() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.globals.urlUsuarios}`).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error' , e.error.mensaje,'error');
        return  throwError(e);
      })
    );
  }
}
