import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class HomeGuard implements CanActivate {

  constructor( ) { }

  canActivate() {
    return true;
  }


}
