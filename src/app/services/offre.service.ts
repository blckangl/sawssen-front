import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private authService: AuthentificationService, private http: HttpClient) { }


  all() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/offre/all', {headers});

  }
  delete(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/offre/delete/' + id, {headers});


  }


  update(c, id, idC, idP, idD) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/offre/edit/' + id + '/' + idC + '/' + idP + '/'  + idD, c, {headers});


  }




  add(c, idC, idP, idD) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/offre/add/' + idC + '/' + idP + '/'  + idD, c, {headers});


  }




  getoffreByDevis(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/offre/bydevis' + '/' + id, {headers});

  }



  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/offre/byid' + '/' + id, {headers});

  }


}
