import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../models/usuario-login';
import { ContaService } from '../services/conta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.components.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  errors: any[] = [];
  form: FormGroup= new FormGroup({});
  private usuarioLogin!: UsuarioLogin;


  constructor(private _formBuilder: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toastr: ToastrService){
    this.form = this._formBuilder.group({
      email: new FormControl('',[
        Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      senha: new FormControl('',[
        Validators.required])
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.form.dirty && this.form.valid){
      this.usuarioLogin = Object.assign({}, this.usuarioLogin, this.form.value);
      this.contaService.login(this.usuarioLogin)
      .subscribe(
          sucesso => {this.processarSucesso(sucesso)},
          falha => {this.processarFalha(falha)}
      );
    }
  }

  processarSucesso(response: any) {
    this.form.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!');
    if(toast){
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
  processarFalha(fail: any){
    this.form.reset();
    this.errors = fail.error.errors.Mensagens;
    if (fail.error?.errors && fail.error.errors.Mensagens && fail.error.errors.Mensagens.length > 0){
      this.errors = fail.error.errors.Mensagens;
    }
    else{
      this.toastr.error('Ocorreu um erro!');
    }
    
  }
}
