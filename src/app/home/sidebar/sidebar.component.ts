import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user;
  role;
  constructor(private authService: AuthentificationService ,  private router: Router) {
  }

  ngOnInit() {
  this.getprofileadmine();
  }



  getprofileadmine() {
      this.authService.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      this.role = res['roles'][0]['roleName'];
      // console.log(res['roles'][0]['roleName']);
    });
  }

  isCommercial() {
    return this.authService.isCommercial();
  }
  isTechnicien() {
    return this.authService.isTechnicien();
  }
  isresponsableachat() {
    return this.authService. isresponsableachat();
  }
  isDirecteur() {
    return this.authService. isDirecteur();
  }
  isAssistanteCommercial() {
    return this.authService. isAssistanteCommercial();
  }

  isAutresResponsables() {
    return this.authService. isAutresResponsables();
  }

  isDirection() {
    return this.authService. isDirection();
  }

  isAdmin() {
    return this.authService. isAdmin();
  }
}
