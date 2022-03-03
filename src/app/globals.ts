import { Injectable } from "@angular/core";
import { Usuario } from "./usuarios/usuario";



@Injectable()

export class Globals {

    loggeado = false;
    userLogeado : Usuario;

    host : string = 'http://localhost:8070';
    mapping : string = '/Api';

    urlUsuarios : string = this.host + this.mapping + '/usuarios';

}