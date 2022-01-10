import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthentificationService,
              private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {

  }


  get f() {
    return this.resetForm.controls;
  }

  email;


  resetForm: FormGroup;
  submit = false;


  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }


  onReset() {


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
}
