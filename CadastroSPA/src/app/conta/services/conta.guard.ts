import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Injectable()
export class ContaGuard implements CanActivate {
   localStorageUtils = new LocalStorageUtils();
  constructor(  private router: Router ) { }

  canActivate() {
    debugger
    let token:string = this.localStorageUtils.obterTokenUsuario();
    if (token !== null && token !== ""){
        this.router.navigate(['/home']);
        return false;
    }

    return true;
  }


}
