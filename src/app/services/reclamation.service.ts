import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthentificationService} from './authentification.service';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private authService: AuthentificationService, private http: HttpClient) { }


  getall() {
    const header = new HttpHeaders({Authorization: 'Bearer ' + this.authService.jwt});
    return this.http.get(environment.baseUrl + '/rec/all', { headers: header});
  }

  delete(id) {
    const header = new HttpHeaders({Authorization: 'Bearer ' + this.authService.jwt});

    return this.http.delete(environment.baseUrl + '/rec/delete/' + id, { headers: header});
  }
}
