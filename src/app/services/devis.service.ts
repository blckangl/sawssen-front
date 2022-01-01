import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

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

  getDevisbyProjet(idP) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/devis/byclient/' +  idP , {headers});

  }

  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/devis/byid' + '/' + id, {headers});

  }

  delete(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/devis/delete/' + id, {headers});


  }
  update(id, idC, idP , c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/devis/edit/' + id + '/' + idC + '/' + idP , c, {headers});


  }


/*
  ajout( idC: number, idP: number, c: any ): Observable<any> {*/
  ajout( idC, idP, c) {
    const headers = new HttpHeaders({authorization: 'Bearer' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/devis/add/' + idC + '/' + idP , c, {headers});
  }


}
