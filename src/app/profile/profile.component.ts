import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(public authServ: AuthentificationService) {
  }

  changeSuccess = false;
  showAlert = false;

  ngOnInit() {
    this.getprofileadmine();
  }

  getprofileadmine() {
    this.authServ.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      // console.log(res['roles'][0]['roleName']);
    });
  }

  changePass(passInput: HTMLInputElement) {
    if (passInput.value.length > 0) {
      this.authServ.changePassword(passInput.value, this.user.id).subscribe(res => {
        this.showAlert = true;
        this.changeSuccess = true;
        passInput.value = '';
      }, error => {
        this.showAlert = true;
        this.changeSuccess = false;
        console.log(error);
      });
    }
  }
}
