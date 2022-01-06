import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private authService: AuthentificationService, private http: HttpClient) {
  }
  getuser() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/admin/users/', {headers});

  }


  // ajout(c) {
  //   const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
  //   return this.http.post( environment.baseUrl + '/client/add/' , c, {headers});
  //
  //
  // }
  //
  // getbyId(id) {
  //
  //   const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
  //
  //   return this.http.get(environment.baseUrl + '/client/byid' + '/' + id, {headers});
  //
  // }
  //
  // getClientbyfullname(fullname) {
  //
  //   const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
  //
  //   return this.http.get(environment.baseUrl + '/client/fullname?' + 'fullname=' + fullname, {headers});
  // }
  //
  //
  //
  //
  supprimer(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/admin/remove/' + id, {headers});


  }
  // modifier(id, c) {
  //   const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
  //   return this.http.put( environment.baseUrl + '/client/edit/' + id , c, {headers});
  //
  //
  // }


  register(c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/admin/register/' , c, {headers});
  }

}
