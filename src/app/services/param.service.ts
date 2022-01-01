import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParamService {

  constructor(private authService: AuthentificationService, private http: HttpClient) { }

  all() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/machineparam/all', {headers});

  }


  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/machineparam/byid' + '/' + id, {headers});

  }

  supprimer(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/machineparam/delete/' + id, {headers});


  }
  modifier(id , c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/machineparam/edit/' + id , c, {headers});


  }




  ajout(c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/machineparam/add/', c, {headers});


  }


  getMachineParambycustomer(customer) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/machineparam/customer?' + 'customer=' + customer, {headers});

  }

}


