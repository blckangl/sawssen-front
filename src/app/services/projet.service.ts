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


  delete(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/projet/delete/' + id, {headers});


  }


  update( id, idC , c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/projet/edit/' + id + '/' + idC , c, {headers});


  }




  ajout(idC, c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/projet/add/' + idC , c, {headers});


  }



  getbyclient(idC) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/projet/byclient/' + idC , {headers});

  }



  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/projet/byid' + '/' + id, {headers});

  }

  getProjetbyproject(project) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/projet/project?' + 'project=' + project, {headers});

  }
  getProjetbydesignation(designation) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/projet/designation?' + 'designation=' + designation, {headers});
  }
}
