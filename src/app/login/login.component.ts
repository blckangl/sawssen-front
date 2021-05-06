import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private  authService: AuthentificationService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {

  }


  get f() {
    return this.loginForm.controls;
  }

  password;
  username;
  message;

  loginForm: FormGroup;
  submit = false;



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onLogin() {
    console.log('username', this.loginForm.value.username);
    console.log('password', this.loginForm.value.password);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(rep => {
console.log('username', this.loginForm.value.username);
console.log('password', this.loginForm.value.password);

const jwt = rep.headers.get('Authorization');
this.authService.saveToken(jwt);
this.router.navigateByUrl('/home');
    }, error1 => {




    });

  }
}
