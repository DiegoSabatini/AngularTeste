import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MenuLoginComponent } from './menu-login/menu-login.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

@NgModule({
    declarations: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        NotFoundComponent,
        AcessoNegadoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
        MenuLoginComponent,
        HomeComponent,
        NotFoundComponent,
        AcessoNegadoComponent
    ]
})
export class NavegacaoModule { }