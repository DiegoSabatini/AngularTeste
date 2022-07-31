import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Injectable()
export class HomeGuard implements CanActivate {

    localStorageUtils = new LocalStorageUtils();
    constructor(private router: Router) { }

  canActivate() {
    let token:string = this.localStorageUtils.obterTokenUsuario();
    if (token !== null && token !== ""){
        return true;
    }
    this.router.navigate(['/conta/login']);
    return false;
  }


}
