import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  constructor(private authService: AuthentificationService, private http: HttpClient) {
  }

  all() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/projet/all', {headers});

  }
}
