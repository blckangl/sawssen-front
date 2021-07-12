import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private authService: AuthentificationService, private http: HttpClient) {
  }


  all() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/devis/all', {headers});

  }

  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/devis' + '/' + id, {headers});

  }
}
