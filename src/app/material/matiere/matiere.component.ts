import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MaterialService} from '../../services/material.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FamilyService} from '../../services/family.service';
import Swal from 'sweetalert2';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss']
})
export class MatiereComponent implements OnInit {
  listfamily;
  listmaterial;
  family;
  reference;
  state: boolean;
  aux;
  id;
  material;
  selectfamily;
  selectmaterial;
  show = false;
  idFamily;
  idMaterial;
  currentDate = new Date().toLocaleDateString();
  addMaterial: FormGroup;
  submitted = false;
  idfamily; detailsfamil;
  matRef: any;
  user;
  role;
  constructor( private ServiceFamily: FamilyService, private ServiceMat: MaterialService , private formBuilder: FormBuilder,
               private actvroute: ActivatedRoute , private authService: AuthentificationService ,  private router: Router ) {

    this.idfamily = this.actvroute.params['value']['idfamily'];

    this.ServiceFamily.getFamily(this.idfamily).subscribe(result => {
      this.detailsfamil = result;
      console.log('detailsfamil', this.detailsfamil);
    });
  }

  ngOnInit() {
    this.getallMaterial() ;
    this.getprofileadmine();
    this.addMaterial = this.formBuilder.group({
      matRef: ['', Validators.required],
      matFam: this.selectfamily,
      supplierr: ['', Validators.required],
      code: ['', Validators.required],
      density: ['', Validators.required],
      pressure: ['', Validators.required],
      automotive: ['', Validators.required],
      purchasing: ['', Validators.required],
      ordered: ['', Validators.required],
      incoterm: ['', Validators.required],
      actual: ['', Validators.required],
      price: ['', Validators.required],
      loadd: ['', Validators.required],
      percentage: ['', Validators.required],
      codef: ['', Validators.required],
      fournisseur: ['', Validators.required],
      date: this.currentDate,
      trac: this.user,
    });
  }
  getallMaterial() {
    this.ServiceMat.getbyfamily(this.idfamily).subscribe(result => {

      this.listmaterial = result;
      this.reference = this.listmaterial[0].matRef;
      console.log('reference', this.reference);
      console.log('listmaterial', this.listmaterial);

    });
  }

  adds() {
      console.log('formgroup', this.addMaterial.value);
      this.ServiceMat.ajout(this.idfamily, this.addMaterial.value).subscribe(res => {
        console.log(res);
        this.getallMaterial();
      });
      Swal.fire({
        position: 'center',
        title: 'Added Successfully',
        html: 'Material has been added',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        width: 500,
      });

  }
  supprimer(idMaterial) {
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
        this.ServiceMat.supprimer(idMaterial).subscribe(res => {
          console.log(res);
          this.getallMaterial();
        });
        Swal.fire(
          'Deleted!',
          'Your Material has been deleted.',
          'success',
        );
      }
    });
  }
  recuper(id, idF, ma, sup, cod, den, pres, aut, pur, ord, inc, ac, pri, loa, per, cf, ff) {
    this.idMaterial = id;
    this.idFamily = idF;
    this.addMaterial.get('matRef').setValue(ma);
    this.addMaterial.get('supplier').setValue(sup);
    this.addMaterial.get('code').setValue(cod);
    this.addMaterial.get('density').setValue(den);
    this.addMaterial.get('pressure').setValue(pres);
    this.addMaterial.get('automotive').setValue(aut);
    this.addMaterial.get('purchasing').setValue(pur);
    this.addMaterial.get('ordered').setValue(ord);
    this.addMaterial.get('incoterm').setValue(inc);
    this.addMaterial.get('actual').setValue(ac);
    this.addMaterial.get('price').setValue(pri);
    this.addMaterial.get('loadd').setValue(loa);
    this.addMaterial.get('percentage').setValue(per);
    this.addMaterial.get('codef').setValue(cf);
    this.addMaterial.get('fournisseur').setValue(ff);
  }

  edit() {
    this.ServiceMat.modifier(this.idMaterial , this.idFamily, this.addMaterial.value).subscribe(res => {
      console.log(res);
      this.getallMaterial();
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
  isCommercial() {
    return this.authService.isCommercial();
  }

  Search() {
    if ( this.matRef === '') {
      this.ngOnInit();
    } else {
      this.listmaterial = this.listmaterial.filter(res => {
        return res.matRef.toLocaleLowerCase().match(this.matRef.toLocaleLowerCase());
      });
    }
  }

  getprofileadmine() {
    this.authService.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      this.role = res['roles'][0]['roleName'];
      // console.log(res['roles'][0]['roleName']);
    });
  }

}
