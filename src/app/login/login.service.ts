import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Usuario } from '../usuarios/usuario';
import { Globals } from '../globals';
import Swal from 'sweetalert2';
import { Observable,catchError,throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  http: HttpClient,private globals : Globals) { }

  getUsuarioByLogin(username : string, password : string) : Observable<Usuario>{
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    return this.http.get<Usuario>(`${this.globals.urlUsuarios}ByLogin`,{params : params}).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error' , e.error.mensaje,'error');
        return  throwError(e);
      })
    );

  }
}
