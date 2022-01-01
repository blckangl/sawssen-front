import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {DevisEssaiService} from '../../services/devis-essai.service';
import {OffreEssaiService} from '../../services/offre-essai.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-offre-essai',
  templateUrl: './offre-essai.component.html',
  styleUrls: ['./offre-essai.component.scss']
})
export class OffreEssaiComponent implements OnInit {
  show = false;
  listclient;
  listdevis;
  selectclient;
  select;
  listoffrebyDevis;
  idOffre;
  DevisDetails;
  essaidevis;
  currentDate = new Date().toLocaleDateString();
  addOffreEssai: FormGroup;
  submitted = false;
  constructor( private actvroute: ActivatedRoute, private  servclient: ClientService, private  servdevis: DevisEssaiService ,
               private servOffre: OffreEssaiService , private formBuilder: FormBuilder) {

    this.idOffre = this.actvroute.params['value']['idOffre'];


    this.servdevis.getbyId(this.idOffre).subscribe(result => {
      this.DevisDetails = result;
      console.log('DevisDetails', this.DevisDetails);
    });
  }

  ngOnInit() {

    this.getallclient();
    this.getallDevis();
    this.addOffreEssai = this.formBuilder.group({
      service: ['', Validators.required],
      numdoc: ['', Validators.required],
      date: this.currentDate,
      client: ['', Validators.required],
      proj: ['', Validators.required],
      mold: ['', Validators.required],
      ref: ['', Validators.required],
      name: ['', Validators.required],
      number: ['', Validators.required],
      dest: ['', Validators.required],
      sales: ['', Validators.required],
      macro: ['', Validators.required],
      cond: ['', Validators.required],
      validity: ['', Validators.required],
      matqu: ['', Validators.required],
      comqu: ['', Validators.required],
      othqu: ['', Validators.required],
      purp: ['', Validators.required],
      purco: ['', Validators.required],
      purot: ['', Validators.required],
      cosma: ['', Validators.required],
      cospu: ['', Validators.required],
      cosu: ['', Validators.required],
      cosd: ['', Validators.required],
      cost: ['', Validators.required],
      cosq: ['', Validators.required],
      marma: ['', Validators.required],
      marcom: ['', Validators.required],
      marothe: ['', Validators.required],
      offma: ['', Validators.required],
      offpur: ['', Validators.required],
      offeoth: ['', Validators.required],
      offtota: ['', Validators.required],
      offmar: ['', Validators.required],
      aym: ['', Validators.required],
      offtot: ['', Validators.required],
      proma: ['', Validators.required],
      proop: ['', Validators.required],
      protec: ['', Validators.required],
      prooth: ['', Validators.required],
      promu: ['', Validators.required],
      propr: ['', Validators.required],
      prote: ['', Validators.required],
      prootc: ['', Validators.required],
      proco: ['', Validators.required],
      procop: ['', Validators.required],
      propc : ['', Validators.required],
      proth: ['', Validators.required],
      prto: ['', Validators.required],
      prma: ['', Validators.required],
      prat: ['', Validators.required],
      mapr: ['', Validators.required],
      prpr: ['', Validators.required],
      mete : ['', Validators.required],
      protu: ['', Validators.required],
      prmc: ['', Validators.required],
      pr: ['', Validators.required],
      prtc: ['', Validators.required],
      prot: ['', Validators.required],
      ofpr: ['', Validators.required],
      ofpa: ['', Validators.required],
      ofd: ['', Validators.required],
      vme: ['', Validators.required],
      qume: ['', Validators.required],
      prme: ['', Validators.required],
      come: ['', Validators.required],
      mame: ['', Validators.required],
      ofme: ['', Validators.required],
      qumeq: ['', Validators.required],
      prime: ['', Validators.required],
      pme: ['', Validators.required],
      cme: ['', Validators.required],
      mgme: ['', Validators.required],
      comec: ['', Validators.required],
      marme: ['', Validators.required],
      tome: ['', Validators.required],
      tame: ['', Validators.required],
      txme: ['', Validators.required],
      tvme: ['', Validators.required],
      prv: ['', Validators.required],
      prq: ['', Validators.required],
      pri: ['', Validators.required],
      prc: ['', Validators.required],
      prm: ['', Validators.required],
      prr: ['', Validators.required],
      pro: ['', Validators.required],
      prt: ['', Validators.required],
      prth: ['', Validators.required],
      prco: ['', Validators.required],
      pry: ['', Validators.required],
      prti: ['', Validators.required],
      prmq: ['', Validators.required],
      prtt: ['', Validators.required],
      proo: ['', Validators.required],
      prx: ['', Validators.required],
      pra: ['', Validators.required],
      otv: ['', Validators.required],
      otq: ['', Validators.required],
      otp: ['', Validators.required],
      otc: ['', Validators.required],
      otm: ['', Validators.required],
      oto: ['', Validators.required],
      otu: ['', Validators.required],
      otpi: ['', Validators.required],
      otco: ['', Validators.required],
      otmo: ['', Validators.required],
      ott: ['', Validators.required],
      otss: ['', Validators.required],
      otma: ['', Validators.required],
      otze: ['', Validators.required],
      otsq: ['', Validators.required],
      otqs: ['', Validators.required],
      otvg: ['', Validators.required],
      pckv: ['', Validators.required],
      pckq: ['', Validators.required],
      pckc: ['', Validators.required],
      pcks: ['', Validators.required],
      pckr: ['', Validators.required],
      pckf: ['', Validators.required],
      pcky: ['', Validators.required],
      pcki: ['', Validators.required],
      pcke: ['', Validators.required],
      pckii: ['', Validators.required],
      pckk: ['', Validators.required],
      pckss: ['', Validators.required],
      pckaq: ['', Validators.required],
      pcka: ['', Validators.required],
      pckm: ['', Validators.required],
      pckh : ['', Validators.required],
      pckg: ['', Validators.required],
      prtvi: ['', Validators.required],
      prtq: ['', Validators.required],
      prtv: ['', Validators.required],
      prtm: ['', Validators.required],
      prtl: ['', Validators.required],
      prtb: ['', Validators.required],
      prtu: ['', Validators.required],
      prtr: ['', Validators.required],
      prtx: ['', Validators.required],
      prta: ['', Validators.required],
      prtf: ['', Validators.required],
      prtfe: ['', Validators.required],
      prtre: ['', Validators.required],
      prtez: ['', Validators.required],
      prtp: ['', Validators.required],
      prtw: ['', Validators.required],
      prmt: ['', Validators.required],
      wov: ['', Validators.required],
      woq: ['', Validators.required],
      wod: ['', Validators.required],
      wos: ['', Validators.required],
      wom: ['', Validators.required],
      wof: ['', Validators.required],
      wok: ['', Validators.required],
      wog: ['', Validators.required],
      won: ['', Validators.required],
      wou: ['', Validators.required],
      wor: ['', Validators.required],
      wop: ['', Validators.required],
      woz: ['', Validators.required],
      woa: ['', Validators.required],
      wob: ['', Validators.required],
      wow: ['', Validators.required],
      woj: ['', Validators.required],
      ayp: ['', Validators.required],
      aya: ['', Validators.required],
      ayz: ['', Validators.required],
      aye : ['', Validators.required],
      ayr: ['', Validators.required],
      ayt: ['', Validators.required],
      ayu: ['', Validators.required],
      ayi: ['', Validators.required],
      ayo: ['', Validators.required],
      abp: ['', Validators.required],
      ayq: ['', Validators.required],
      ayw: ['', Validators.required],
      ayx: ['', Validators.required],
      ayha: ['', Validators.required],
      ayg: ['', Validators.required],
      ayv: ['', Validators.required],
      ina: ['', Validators.required],
      inz: ['', Validators.required],
      ine: ['', Validators.required],
      inr: ['', Validators.required],
      itn: ['', Validators.required],
      iny: ['', Validators.required],
      inu: ['', Validators.required],
      ini: ['', Validators.required],
      ino: ['', Validators.required],
      inp: ['', Validators.required],
      inq: ['', Validators.required],
      ins: ['', Validators.required],
      ind: ['', Validators.required],
      inf: ['', Validators.required],
      ing: ['', Validators.required],
      inh : ['', Validators.required],
      ink : ['', Validators.required],
      pcck: ['', Validators.required],
    });
  }
  get f() {
    return this.addOffreEssai.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log('addform', this.addOffreEssai.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addOffreEssai.value, null, 4));

  }
  onReset() {
    this.submitted = false;
    this.addOffreEssai.reset();
  }
  getallclient() {
    this.servclient.all().subscribe(result => {


      this.listclient = result ;

      console.log('listClient', this.listclient);

    });
  }


  getallDevis() {

    this.servdevis.getall().subscribe(res => {


      this.listdevis = res ;

      console.log('listdevis', this.listdevis);


    });
  }


  public onChangeSelectedClient(event) {
    this.show = true;
    console.log('show', this.show);
    this.selectclient = event.target.value;
    console.log('selectclient', this.selectclient);

    this.servdevis.getbyclient(this.selectclient).subscribe(res => {
      this.listdevis = res ;
      console.log('listdevis', res);
    });

  }



  onChangeSelectedDevis(event) {
    this.show = true;

    this.select = event.target.value;
    console.log('selectdevischoisi', this.select);

    this.servOffre.getoffreByDevis(this.select).subscribe(resultat => {

      this.listoffrebyDevis = resultat ;
      console.log('listoffrebyDevis', this.listoffrebyDevis);

      this.idOffre = this.listoffrebyDevis[0].id;
      console.log('idOffre', this.idOffre);



    });



  }





}
