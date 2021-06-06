import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthentificationService) {
  }

  ngOnInit() {
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

}
