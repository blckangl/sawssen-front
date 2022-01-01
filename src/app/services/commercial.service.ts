import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  constructor(private authService: AuthentificationService, private http: HttpClient) { }

/*  getall() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/commercial/all/', {headers});
  }*/

  register(c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/commercial/register/' , c, {headers});
  }

  updateCommercial(id , c) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/commercial/update/' + id , c, {headers});
  }

  deleteUser(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});
    return this.http.delete(environment.baseUrl + '/commercial/remove/' + id, {headers});
  }

  findUserByIdUser(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.get(environment.baseUrl + '/commercial/byId/' + id, {headers});
  }
}
