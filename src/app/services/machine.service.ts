import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private authService: AuthentificationService, private http: HttpClient) { }

  all() {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/machine/all', {headers});

  }
  supprimer(id) {
    const headers = new HttpHeaders({authorization: 'Bearer ' +  this.authService.jwt});


    return this.http.delete(environment.baseUrl + '/machine/delete/' + id, {headers});


  }


  modifier(id , c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.put( environment.baseUrl + '/machine/edit/' + id , c, {headers});


  }



  ajout(c) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});
    return this.http.post( environment.baseUrl + '/machine/add/' , c, {headers});


  }
  getbyId(id) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authService.jwt});

    return this.http.get(environment.baseUrl + '/machine/byid' + '/' + id, {headers});

  }

}

