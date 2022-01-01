import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FamilyService} from '../../services/family.service';
import {MaterialService} from '../../services/material.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {AuthentificationService} from '../../services/authentification.service';


@Component({
  selector: 'app-ajoute-matiere',
  templateUrl: './ajoute-matiere.component.html',
  styleUrls: ['./ajoute-matiere.component.scss']
})
export class AjouteMatiereComponent implements OnInit {
  listFamily;
  family ;
  idFamily;
  FamilyDetails;
  addFamily: FormGroup;
  submitted = false;
  namefamily: any;
  user;
  role;
  currentDate = new Date().toLocaleDateString();
  constructor(private actvroute: ActivatedRoute, private ServiceFamily: FamilyService, private ServiceMat: MaterialService ,
              private formBuilder: FormBuilder , private authService: AuthentificationService ) {

    this.idFamily = this.actvroute.params['value']['idFamily'];
    this.ServiceFamily.getFamily(this.idFamily).subscribe(result => {
   this.FamilyDetails = result;
   console.log('FamilyDetails', this.FamilyDetails);
    });

  }
  ngOnInit() {
    this.getallFamily();
    this.getprofileadmine();
    this.addFamily = this.formBuilder.group({
      namefamily: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
  }
  get f()   {
    return this.addFamily.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log('addform', this.addFamily.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addFamily.value, null, 4));

  }
  onReset() {
    this.submitted = false;
    this.addFamily.reset();
  }
  getprofileadmine() {
    this.authService.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      this.role = res['roles'][0]['roleName'];
      // console.log(res['roles'][0]['roleName']);
    });
  }

  getallFamily() {
    this.ServiceFamily.all().subscribe(result => {

      this.listFamily = result ;

      console.log('listFamily', this.listFamily);

    });
  }
  add() {
    console.log('formgroup', this.addFamily.value);
    this.ServiceFamily.ajout(this.addFamily.value).subscribe(res => {
      console.log(res);
      this.getallFamily();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Family has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });

  }
  supprimer(idFamily) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.ServiceFamily.supprimer(idFamily).subscribe(res => {
          console.log(res);
          this.getallFamily();
        });
        Swal.fire(
          'Deleted!',
          'Your Family has been deleted.',
          'success',
        );
      }
    });
  }
  recuper(id, fa) {
    this.idFamily = id;
    this.addFamily.get('namefamily').setValue(fa);

  }
  edit() {
    /*console.log('formgroup', this.addcarton.value);*/
    this.ServiceFamily.modifier(this.idFamily, this.addFamily.value).subscribe(res => {
      console.log(res);
      this.getallFamily();
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      width: 500,
      padding: 50,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: 'success',
      title: 'The changes saved'
    });
  }

  Search() {
    if ( this.namefamily === '') {
      this.ngOnInit();
    } else {
      this.listFamily = this.listFamily.filter(res => {
        return res.namefamily.toLocaleLowerCase().match(this.namefamily.toLocaleLowerCase());
      });
    }
  }
}
