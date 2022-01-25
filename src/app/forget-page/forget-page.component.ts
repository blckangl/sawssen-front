import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-page',
  templateUrl: './forget-page.component.html',
  styleUrls: ['./forget-page.component.scss']
})
export class ForgetPageComponent implements OnInit {

  public appState: State = State.email;

  public get AppState(): typeof State {
    return State;
  }

  constructor(private authService: AuthentificationService,
              private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {

  }


  get f() {
    return this.resetForm.controls;
  }

  email;
  code: string;
  password: string;

  resetForm: FormGroup;
  submit = false;


  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }


  onReset() {

    console.log(this.resetForm.value.email);
    const adressEmail = this.resetForm.value.email;
    this.authService.resetPasswrod({email: adressEmail}).subscribe(res => {
      console.log('done');
      this.appState = State.verif;
    }, err => {
      console.log(err);
    });

    //   this.authService.login(this.loginForm.value).subscribe(rep => {
    //     console.log('username', this.loginForm.value.username);
    //     console.log('password', this.loginForm.value.password);
    //
    //     const jwt = rep.headers.get('Authorization');
    //     this.authService.saveToken(jwt);
    //     this.router.navigateByUrl('/home');
    //   }, error1 => {
    //     Swal.fire('Error ! ', 'Check your data ! ');
    //
    //
    //   });
    //
  }

  verifyCode() {
    if (this.code.length > 0) {
      this.appState = State.password;
    }
  }

  changePassword() {
    if (this.password) {
      this.authService.verifyPasswrod({code: this.code, password: this.password}).subscribe(res => {
        this.router.navigate(['']);
      }, error => {
        console.log(error);
        this.appState = State.verif;
      });
    }
  }
}

enum State {
  email, verif, password
}
