import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authServ: AuthentificationService) {
  }

  ngOnInit() {
    this.getprofileadmine();
  }

  getprofileadmine() {
    this.authServ.getprofile().subscribe(res => {
      console.log(res);
      // console.log(res['roles'][0]['roleName']);
    });
  }

}
