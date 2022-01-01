import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {AuthentificationService} from '../../services/authentification.service';
import {ProjetService} from '../../services/projet.service';
import Swal from 'sweetalert2';
import {DemandeService} from '../../services/demande.service';

@Component({
  selector: 'app-demande-etude-consultation',
  templateUrl: './demande-etude-consultation.component.html',
  styleUrls: ['./demande-etude-consultation.component.scss']
})
export class DemandeEtudeConsultationComponent implements OnInit {
  adddemande: FormGroup;
  submitted = false;
  listdemande;
  listclient; selectclient;
  idprojet; listprojet ; selectprojet;
  show = false;
  currentDate = new Date().toLocaleDateString();
  user;
  role;
  constructor(private actvroute: ActivatedRoute, private servclient: ClientService, private servprojet: ProjetService ,
              private serdcmande: DemandeService, private formBuilder: FormBuilder, private authService: AuthentificationService) { }

  ngOnInit() {
    this.getprofileadmine();
    this.getalldemande();
    this.getallclient();
    this.getallProjet();
    this.adddemande = this.formBuilder.group({
      date: this.currentDate,
      ndoc: ['', Validators.required],
      customer: ['', Validators.required],
      fincusto: ['', Validators.required],
      sales: ['', Validators.required],
      project: ['', Validators.required],
      rfq: ['', Validators.required],
      number: ['', Validators.required],
      offer: ['', Validators.required],
      daterecp: ['', Validators.required],
      delivry: ['', Validators.required],
      returndate: ['', Validators.required],
      statecus : ['', Validators.required],
      commentcus: ['', Validators.required],
      statetech: ['', Validators.required],
      commenttech: ['', Validators.required],
      targetpart: ['', Validators.required],
      targetinvest: ['', Validators.required],
      annual: ['', Validators.required],
      productivity: ['', Validators.required],
      trac: this.user,
    });
  }
  get f() {
    return this.adddemande.controls;
  }
  onSubmit() {
    this.submitted = true;

    console.log('addform', this.adddemande.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.adddemande.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.adddemande.reset();
  }
  getprofileadmine() {
    this.authService.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      this.role = res['roles'][0]['roleName'];
      // console.log(res['roles'][0]['roleName']);
    });
  }

  getalldemande() {
    this.serdcmande.getall().subscribe(result => {
      this.listdemande = result;
      console.log('listdemande', this.listdemande);
    });
  }

/*
  add() {
    console.log('formgroup', this.adddemande.value);
    this.serdcmande.ajout(this.idprojet, this.adddemande.value).subscribe(res => {
      console.log(res);
      this.getalldemande();
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Request study consultation has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });
  }
*/

  getallclient() {
    this.servclient.all().subscribe(result => {
      this.listclient = result ;
      console.log('listClient', this.listclient);
    });
  }
  getallProjet() {
    this.servprojet.all().subscribe(rep => {
      this.listprojet = rep;
      console.log('listprojet', this.listprojet);
    });
  }
  public onChangeSelectedClient(event) {
    this.show = true;
    console.log('show', this.show);
    this.selectclient = event.target.value;
    console.log('selectclient', this.selectclient);
    this.servprojet.getbyclient(this.selectclient).subscribe(res => {
      this.listprojet = res;
      console.log('listprojet', res);
    });
  }

  }
