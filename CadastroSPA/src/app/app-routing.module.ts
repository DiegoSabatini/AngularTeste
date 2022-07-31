import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoNegadoComponent } from './navegacao/acesso-negado/acesso-negado.component';
import { HomeComponent } from './navegacao/home/home.component';
import { HomeGuard } from './navegacao/home/services/home.guard';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/conta', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [HomeGuard] },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module')
      .then(m => m.ContaModule)
  },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'nao-encontrado', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
