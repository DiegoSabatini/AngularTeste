import { Component } from '@angular/core';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  public isCollapsed: boolean;
  localStorageUtils = new LocalStorageUtils();
  token: string = "";
  user: any;
  email: string = "";

  constructor() {
    this.isCollapsed = true;
  }

  usuarioLogado(): boolean {
    this.token = this.localStorageUtils.obterTokenUsuario();
    this.user = this.localStorageUtils.obterUsuario();

    if (this.user && this.user !== "")
      this.email = this.user.email;

    return (this.token !== null && this.token !== "");
  }
}
