import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

@NgModule({
    declarations: [
        MenuComponent,
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
        HomeComponent,
        NotFoundComponent,
        AcessoNegadoComponent
    ]
})
export class NavegacaoModule { }