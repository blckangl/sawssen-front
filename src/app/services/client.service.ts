import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private authService: AuthentificationService, private http: HttpClient) {
  }


  all() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/client/all', {headers});

  }
  delete(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/client/delete/' + id, {headers});


  }


  update(c, id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/client/edit/' + id , c, {headers});


  }




  add(c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/client/add/' , c, {headers});


  }
  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/client' + '/' + id, {headers});

  }

}
