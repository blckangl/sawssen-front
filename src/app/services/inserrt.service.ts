import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class InserrtService {

  constructor(private authService: AuthentificationService, private http: HttpClient) { }
  all() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/insert/all', {headers});

  }
  supprimer(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/insert/delete/' + id, {headers});


  }


  modifier(id , c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/insert/edit/' + id , c, {headers});


  }




  ajout(c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/insert/add/' , c, {headers});


  }
  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/insert/byid' + '/' + id, {headers});

  }

}

