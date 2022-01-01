import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreEssaiService {

  constructor(private authService: AuthentificationService, private http: HttpClient) { }

  getall() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/essaiOffre/all', {headers});

  }
  supprimer(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});
    return this.http.delete(environment.baseUrl + '/essaiOffre/delete/' + id, {headers});

  }


  modifier(id, idD, c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/essaiOffre/edit/' + id + '/'  + idD, c, {headers});


  }

  ajout(idD, c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/essaiOffre/add/'  + idD, c, {headers});

  }




  getoffreByDevis(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/essaiOffre/bydevis' + '/' + id, {headers});

  }



  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/essaiOffre/byid' + '/' + id, {headers});

  }


}
