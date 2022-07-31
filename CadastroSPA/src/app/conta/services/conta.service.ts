import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, Observable, throwError } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { UsuarioLogin } from '../models/usuario-login';
import { UsuarioNovaConta } from '../models/usuario-nova-conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends BaseService {

  constructor(public http: HttpClient) { super()}

  registrarUsuario(usuario: UsuarioNovaConta): Observable<UsuarioNovaConta> {
    debugger
    let response = this.http
        .post(this.UrlServiceV1 + 'Identidade/nova-conta', usuario, this.ObterHeaderJson())
        .pipe(
            map(this.extractData),
            catchError(this.serviceError));

    return response;
}

login(usuario: UsuarioLogin): Observable<UsuarioLogin> {
    let response = this.http
        .post(this.UrlServiceV1 + 'Identidade/autenticar', usuario, this.ObterHeaderJson())
        .pipe(
            map(this.extractData),
            catchError(this.serviceError));

    return response;
}
}
