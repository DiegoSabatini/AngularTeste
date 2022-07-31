import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { throwError } from "rxjs";
import { environment } from 'src/environments/environment';
import { LocalStorageUtils } from '../utils/localstorage';

export abstract class BaseService {

    protected UrlServiceV1: string = environment.apiUrlv1;
    public LocalStorage = new LocalStorageUtils();
    constructor() {}

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected ObterAuthHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.LocalStorage.obterTokenUsuario()}`
            })
        };
    }

    protected extractData(response: any) {
        return response || {};
    }

    protected serviceError(response: Response | any) {
       
        let customError: string[] = [];
        let customResponse = { error: { errors:  [] = [] }}

        if (response instanceof HttpErrorResponse) {

            if (response.statusText === "Unknown Error") {
                customError.push("Ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
        }
        if (response.status === 500) {
            customError.push("Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.");
            
            // Erros do tipo 500 não possuem uma lista de erros
            // A lista de erros do HttpErrorResponse é readonly                
           
            console.error(customError);
        }

        console.error(response);
        return throwError(response);
    }
}