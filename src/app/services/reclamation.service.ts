import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthentificationService} from './authentification.service';


@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private authService: AuthentificationService, private http: HttpClient) {
  }


  getall() {
    const header = new HttpHeaders({Authorization: 'Bearer ' + this.authService.jwt});
    return this.http.get(environment.baseUrl + '/rec/all', {headers: header});
  }

  delete(id) {
    const header = new HttpHeaders({Authorization: 'Bearer ' + this.authService.jwt});

    return this.http.delete(environment.baseUrl + '/rec/delete/' + id, {headers: header});
  }

  add(reclamation: Reclamation, destination: string) {
    console.log('adding ', reclamation);
    this.authService.getprofile().subscribe(({id}) => {
      const header = new HttpHeaders({Authorization: 'Bearer ' + this.authService.jwt});

      return this.http.post(`${environment.baseUrl}/reclamation/add/${id}/${destination}`, reclamation, {headers: header})
        .subscribe(res => {
          console.log(res);
        }, error => console.log(error));
    });

  }
}
