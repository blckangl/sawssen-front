import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  jwt = localStorage.getItem('token');
  username: string;
  roles: string [];

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {

  }

  login(data) {

    return this.http.post(environment.baseUrl + '/login', data, {observe: 'response'});

  }

  resetPasswrod({email}: any) {
    console.log({email: email});
    return this.http.post(environment.baseUrl + '/reset', {email});
  }

  verifyPasswrod({code, password}: any) {
    return this.http.post(environment.baseUrl + '/reset/verify', {code, password});
  }

  changePassword(newPass: string, id: string) {
    console.log('user id is ', id);
    console.log('path is ', environment.baseUrl + `/user/password/${id}`);
    return this.http.post(environment.baseUrl + `/user/password/${id}`, {password: newPass});
  }

  //
  // registeradmin(c) {
  //   const headers = new HttpHeaders({authorization: 'Bearer ' + this.jwt});
  //   return this.http.post(environment.baseUrl + '/admin/register', c, {headers});
  //
  //
  // }
  //
  // registercomm(c) {
  //   const headers = new HttpHeaders({authorization: 'Bearer ' + this.jwt});
  //   return this.http.post( environment.baseUrl + '/commercial/register/' , c, {headers});
  // }
  //
  //


  getprofile() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.jwt});

    return this.http.get<any>(environment.baseUrl + '/user/users/', {headers});
  }

  parseJWT() {

    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();


  }

  isTechnicien() {
    if (this.roles) {

      if (this.roles.indexOf('TECHNICIEN') >= 0) {

        return this.roles.indexOf('TECHNICIEN') >= 0;

      }
    }
  }


  isresponsableachat() {
    if (this.roles) {
      if (this.roles.indexOf('RESPONSABLEACHAT') >= 0) {


        return this.roles.indexOf('RESPONSABLEACHAT') >= 0;
      }
    }
  }


  isCommercial() {
    if (this.roles) {
      if (this.roles.indexOf('COMMERCIAL') >= 0) {

        return this.roles.indexOf('COMMERCIAL') >= 0;
      }
    }
  }


  isDirecteur() {
    if (this.roles) {
      if (this.roles.indexOf('DIRECTEUR') >= 0) {

        return this.roles.indexOf('DIRECTEUR') >= 0;
      }
    }
  }


  isAssistanteCommercial() {
    if (this.roles) {
      if (this.roles.indexOf('ASSISTANTECOMMERCIAL') >= 0) {

        return this.roles.indexOf('ASSISTANTECOMMERCIAL') >= 0;
      }
    }
  }


  isAutresResponsables() {
    if (this.roles) {
      if (this.roles.indexOf('AUTRESRESPONSABLES') >= 0) {

        return this.roles.indexOf('AUTRESRESPONSABLES') >= 0;
      }
    }
  }

  isDirection() {
    if (this.roles) {
      if (this.roles.indexOf('DIRECTION') >= 0) {

        return this.roles.indexOf('DIRECTION') >= 0;
      }
    }
  }

  isAuthenticated() {

    return this.roles && (this.isDirection() || this.isCommercial() || this.isresponsableachat() || this.isAssistanteCommercial() ||
      this.isAdmin() || this.isAutresResponsables() || this.isDirecteur() || this.isTechnicien());
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

  logout() {
    localStorage.removeItem('token');
    this.initParams();
  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

  isAdmin() {
    if (this.roles) {
      if (this.roles.indexOf('ADMIN') >= 0) {

        return this.roles.indexOf('ADMIN') >= 0;
      }
    }
  }

  isAuth(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }
}
