import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjetService} from '../services/projet.service';
import {ClientService} from '../services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  listProject; listclient;
  selectclient;
  idProject;
  idClient;
  detailclient;
  ProjectDetails;
  addProjet: FormGroup;
  submitted = false;
  constructor(private actvroute: ActivatedRoute, private ServiceProject: ProjetService, private formBuilder: FormBuilder,
              private ServiceClient: ClientService , private router: Router) { }

  ngOnInit() {
    this.getallProject();
    this.getclient();
    this.addProjet = this.formBuilder.group({
      anne: ['', Validators.required],
      mois: ['', Validators.required],
      numconsult: ['', Validators.required],
      indicer: ['', Validators.required],
      numoffer: ['', Validators.required],
      commercialB: ['', Validators.required],
      Clientg: ['', Validators.required],
      sitedeman: ['', Validators.required],
      acheteur: ['', Validators.required],
      rfqref: ['', Validators.required],
      project: ['', Validators.required],
      designation: ['', Validators.required],
      ref: ['', Validators.required],
      dateRFQ: ['', Validators.required],
      deadline: ['', Validators.required],
      statutrep: ['', Validators.required],
      dateoffer: ['', Validators.required],
      dateder: ['', Validators.required],
      sitelivr: ['', Validators.required],
      volume: ['', Validators.required],
      typepiece: ['', Validators.required],
      matiere: ['', Validators.required],
      poidsnet: ['', Validators.required],
      prixmatiere: ['', Validators.required],
      tonnage: ['', Validators.required],
      tc: ['', Validators.required],
      parachevement: ['', Validators.required],
      nbremp: ['', Validators.required],
      prixpiece: ['', Validators.required],
      ca: ['', Validators.required],
      gpm: ['', Validators.required],
      productivite: ['', Validators.required],
      prixachat: ['', Validators.required],
      prixv: ['', Validators.required],
      mouliste: ['', Validators.required],
      capex: ['', Validators.required],
      statutpro: ['', Validators.required],
      causeperte: ['', Validators.required],
      chefpro: ['', Validators.required],
      datedecision: ['', Validators.required],
      datesop: ['', Validators.required],
      sop: ['', Validators.required],
      sop1: ['', Validators.required],
      sop2: ['', Validators.required],
      sop3: ['', Validators.required],
      sop4: ['', Validators.required],
      sop5: ['', Validators.required],
      sop6: ['', Validators.required],
      sop7: ['', Validators.required],
      sop8: ['', Validators.required],
      sop9: ['', Validators.required],
      sopdi: ['', Validators.required],
      numrec: ['', Validators.required],
      toff: ['', Validators.required],
      towup: ['', Validators.required],
      numoto: ['', Validators.required],
      wonpe: ['', Validators.required],
      wonperi: ['', Validators.required],
      conca: ['', Validators.required],
      numrdat: ['', Validators.required],
      respon: ['', Validators.required],
      deacom: ['', Validators.required],

    });
  }

  get f() {
    return this.addProjet.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log("addform", this.addProjet.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addProjet.value, null, 4));

  }
  add() {
    console.log('formgroup', this.addProjet.value);
    this.ServiceProject.ajout(this.idClient, this.addProjet.value).subscribe(res => {
      console.log(res);
      /*Swal.fire({ position: 'center'});*/
      /*this.toastr.success('validation faite avec suus');*/
    });
    /*   this.router.navigate(['/devis']);*/
  }

  edit() {

    console.log('formgroup', this.addProjet.value);
    this.ServiceProject.update( this.idProject , this.idClient,  this.addProjet.value).subscribe(res => {
      console.log(res);
      /*Swal.fire({ position: 'center'});*/
      /*this.toastr.success('validation faite avec suus');*/
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    });
  }
  onReset() {
    this.submitted = false;
    this.addProjet.reset();
  }

  getallProject() {
    this.ServiceProject.all().subscribe(result => {

      this.listProject = result ;

      console.log('listProject', this.listProject);

    });
  }

  getclient() {

    this.ServiceClient.all().subscribe(result => {
      this.listclient = result;
      console.log('listclient', this.listclient);
    });
  }
  onChangeSelectedClient(event) {

    this.selectclient = event.target.value;
    console.log('selectclientchoisi', this.selectclient);

    this.ServiceClient.getbyId(this.selectclient).subscribe(result => {

      this.detailclient = result ;
      console.log('detailclient', this.detailclient);
    });
  }

}


