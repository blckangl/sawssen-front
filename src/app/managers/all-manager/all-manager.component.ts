import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../services/admin.service';
import Swal from 'sweetalert2';
import {UserService} from '../../services/user.service';
import {DirecteurService} from '../../services/directeur.service';
import {DirectionService} from '../../services/direction.service';
import {CommercialService} from '../../services/commercial.service';
import {TechnicienService} from '../../services/technicien.service';
import {AssistanteService} from '../../services/assistante.service';
import {ResponAchatService} from '../../services/respon-achat.service';
import {AutreResService} from '../../services/autre-res.service';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-all-manager',
  templateUrl: './all-manager.component.html',
  styleUrls: ['./all-manager.component.scss']
})
export class AllManagerComponent implements OnInit {
  listUser;
  idUser;
  UserDetails;
  currentDate = new Date().toLocaleDateString();
  addmanager: FormGroup;
  submitted = false;
  p = 1;
  constructor(  private actvroute: ActivatedRoute, private servUser: UserService , private formBuilder: FormBuilder,
                private admin: AdminService , private directeur: DirecteurService, private direction: DirectionService,
                private commercial: CommercialService, private technicien: TechnicienService, private assistante: AssistanteService ,
                private achat: ResponAchatService , private autre: AutreResService , private router: Router,
                private autoSer: AuthentificationService) { }

  ngOnInit() {
    this.getalluser();
    this.addmanager = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastname: ['', Validators.required],
      joiningDate: this.currentDate,
      mobileNo: ['', Validators.required],
      designation: ['', Validators.required],
      departments: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm:  ['', Validators.required],
      actived: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      profilePicture:  ['', Validators.required],
    });
  }
  get f() {
    return this.addmanager.controls;
  }
  onSubmit() {
    this.submitted = true;

    console.log('addform', this.addmanager.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addmanager.value, null, 4));
  }
  onReset() {
    this.submitted = false;
    this.addmanager.reset();
  }
  getalluser() {
    this.servUser.ListAllusers().subscribe(result => {

      this.listUser = result ;

      console.log('listUser', this.listUser);

    });
  }

  // addAdmin() {
  //   console.log('formgroup', this.addmanager.value);
  //   this.autoSer.registeradmin(this.addmanager.value).subscribe(res => {
  //     console.log(res);
  //     this.getalluser();
  //   });
  //   Swal.fire({
  //     position: 'center',
  //     title: 'Added Successfully',
  //     html: 'Admin has been added',
  //     icon: 'success',
  //     showConfirmButton: false,
  //     timer: 1500,
  //     width: 500,
  //   });
  //
  // }


}
