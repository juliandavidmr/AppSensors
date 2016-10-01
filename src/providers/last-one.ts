import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LastOne provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LastOne {

  data: any;

  constructor(public http: Http) {
    console.log('Hello LastOne Provider');
  }

  load() {
    return new Promise(resolve => {
      this.http.get('http://200.21.7.94/Sweb_gral/Service1.svc/servicio_Consultar/5,%22%22')
        .map(res => res.json())
        .subscribe((data: any) => {
          // console.log(data.ServicioConsultasResult);
          
          this.data = JSON.parse(data.ServicioConsultasResult);
          resolve(this.data);
        });
    });
  }

}
