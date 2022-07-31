import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioNovaConta } from '../models/usuario-nova-conta';
import { ContaService } from '../services/conta.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  errors: any[] = [];
  form: FormGroup= new FormGroup({});
  private usuarioNovaConta!: UsuarioNovaConta;


  constructor(private _formBuilder: FormBuilder,
     private contaService: ContaService,
      private toastr: ToastrService,
      private router: Router){
    this.form = this._formBuilder.group({
      email: new FormControl('',[
        Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      senha: new FormControl('',[
        Validators.required]),
        senhaConfirmacao: new FormControl('',[
        Validators.required]),
    });
  }

  ngOnInit(): void {
 
  }


  onSubmit() {
    debugger
    if (this.form.dirty && this.form.valid){
      this.usuarioNovaConta = Object.assign({}, this.usuarioNovaConta, this.form.value);
      this.contaService.registrarUsuario(this.usuarioNovaConta)
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

    let toast = this.toastr.success('Registro realizado com Sucesso!', 'Bem vindo!!!');
    if(toast){
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
  processarFalha(fail: any){
    this.form.reset();
    this.errors = fail.error.errors.Mensagens;
    if (fail.error?.errors && fail.error.errors){
        if (fail.error.errors.Senha)  this.errors = fail.error.errors.Senha;
        else if (fail.error.errors.SenhaConfirmacao) this.errors = fail.error.errors.SenhaConfirmacao;
      

    }
    else{
      this.toastr.error('Ocorreu um erro!');
    }
    
  }

}
