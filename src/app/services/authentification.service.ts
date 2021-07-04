import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  jwt: string;
  username: string;
  // tslint:disable-next-line:ban-types
  roles: Array<String>;

  constructor(private http: HttpClient) {

  }

  login(data) {

    return this.http.post(environment.baseUrl + '/login', data, {observe: 'response'});

  }

  /*register(data) {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.jwt});
    return this.http.post(environment.baseUrl + '/admin/add', data, {headers});


  }*/


 /* getprofile(id) {
    let headers = new HttpHeaders({'authorization': 'Bearer ' + this.jwt});

    return this.http.get(environment.baseUrl + '/commercial/byId/' , +id,{headers: headers});
  }*/


  parseJWT() {

    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
  }

  saveToken(jwt: string) {
    sessionStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  isTechnicien() {
    return this.roles.indexOf('TECHNICIEN') >= 0;
  }

  isresponsableachat() {
    return this.roles.indexOf('RESPONSABLEACHAT') >= 0;

  }

  isCommercial() {
    return this.roles.indexOf('COMMERCIAL') >= 0;

  }
  isDirecteur() {
    return this.roles.indexOf('DIRECTEUR') >= 0;

  }
  isAssistanteCommercial() {
  return this.roles.indexOf('ASSISTANTECOMMERCIAL') >= 0;
  }

  isAutresResponsables() {
    return this.roles.indexOf('AUTRESRESPONSABLES') >= 0;
  }

  isDirection() {
    return this.roles.indexOf('DIRECTION') >= 0;
  }
  isAuthenticated() {

    return this.roles && (this.isDirection() || this.isCommercial() || this.isresponsableachat());
  }

  loadToken() {
    this.jwt = sessionStorage.getItem('token');
    this.parseJWT();
  }

  logout() {
    sessionStorage.removeItem('token');
    this.initParams();

  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

}
