import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  public cadastroForm!: FormGroup;


  constructor(private _formBuilder: FormBuilder){
    this.cadastroForm = this._formBuilder.group({
      email: new FormControl('',[
        Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      senha: new FormControl('',[
        Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+]).{8,}$")]),
      confirmarSenha: new FormControl('',[
        Validators.required,
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-+]).{8,}$")]),
    });
  }

  ngOnInit(): void {
 
  }

}
