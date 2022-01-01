import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(private authService: AuthentificationService, private http: HttpClient) { }

  register(c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/direction/register/' , c, {headers});
  }

  updatesaveDirection(id , c) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/direction/update/' + id , c, {headers});
  }

  deleteUser(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});
    return this.http.delete(environment.baseUrl + '/direction/remove/' + id, {headers});
  }

  findUserByIdUser(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.get(environment.baseUrl + '/direction/byId/' + id, {headers});
  }
}
