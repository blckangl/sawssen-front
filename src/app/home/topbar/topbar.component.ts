import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  user;
  role;
  constructor(private authService: AuthentificationService ,  private router: Router) {
    this.getprofileadmine();
  }

  ngOnInit() {
  }
  getprofileadmine() {
    this.authService.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      this.role = res['roles'][0]['roleName'];
      // console.log(res['roles'][0]['roleName']);
    });
  }


  deconnexion() {

    this.authService.logout();
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}

