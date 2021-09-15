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


  getProjetByClient(idC) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/projet/byclient/' + idC , {headers});

  }
  delete(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/projet/delete/' + id, {headers});


  }


  update(c, id, idC) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/projet/edit/' + id + '/' + idC , c, {headers});


  }




  add(c, idC) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/projet/add/' + idC , c, {headers});


  }




  getprojetByClient(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/projet/byclient' + '/' + id, {headers});

  }


}
