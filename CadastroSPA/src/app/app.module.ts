import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  BrowserAnimationsModule  }  from  '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeGuard } from './navegacao/home/services/home.guard';
import { NavegacaoModule } from './navegacao/navegacao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NavegacaoModule
  ],
  providers: [
    HomeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
