import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DevisService} from '../../services/devis.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FamilyService} from '../../services/family.service';
import {MaterialService} from '../../services/material.service';
import {ProjetService} from '../../services/projet.service';
import {ClientService} from '../../services/client.service';
import {ParamService} from '../../services/param.service';
import {CartonService} from '../../services/carton.service';
import {SachetService} from '../../services/sachet.service';
import {SeparationService} from '../../services/separation.service';
import {PaletteService} from '../../services/palette.service';
import {TransportService} from '../../services/transport.service';
import {ColorantService} from '../../services/colorant.service';
import {InserrtService} from '../../services/inserrt.service';
import {AuthentificationService} from '../../services/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoute-deviscalcul',
  templateUrl: './ajoute-deviscalcul.component.html',
  styleUrls: ['./ajoute-deviscalcul.component.scss']
})
export class AjouteDeviscalculComponent implements OnInit {
  x;
  listcount = [];
  listcou = [];
  idProjet;
  idDevis;
  idClient;
  listfamily; listmaterial;  listprojet; listmachineparam; listcarton; listsachet; listseparation; listseparationv;
  listpalette; listtransport; listcolorant; listinsert; listmachine;
  selectfamily;   selectmaterial;  selectprojet; selectmachineparam; selectdetailsclient; selectmachine;
  selectcarton; selectsachet ; selectseparation ; selectpalette ; selectseparationv; selecttransport; selectcolorant; selectinsert;
  materialDetail;
  detailmater;
  detailmachinep;
  detailprojet;
  detailcarton ; detailsachet ; detailseparation ; detailpalette ; detailseparationv; detailtransport; detailcolorant;
  detailinsert;  detailmachine;
  addDevis: FormGroup;
  estimatedf: any;
  submitted = false;
 /*  calcul  */
  numdoc;  numdocdev;  annualQua;   sop;   sopUn;   sopDe;   sopTr;  sopQu; sopCi;   sopSe;   sopSet;
  sopWe;   sopNe;   sopDi;  life ; estimatedSp;   section;   long;  miniPro;  partSur;
  lenghtP;   weidthP;   hauteurP;  delivered;  transport;  sales; netW;   volum;    estimated;  injectedW;
  sprueU;  sprueJ; scrap;    scrapC;   grossW;  materialW;    pourcentageMa;  batch;
  annualPur;  netto;  pourcentageNe;  unit;  parts;  handling;  rate;
  grcol;  perctcol;   nettocol;  ratecol;   scrapcol;   nettool;
  costcolorn;  assycol;   handcol;  transpcolor;  totalMat;  pourNet;
  nettoP;  grossP;   insertCost;  transportP;  rateP;   scrapP;  handlingP;
  partsAss;   total;  partH;  partC;   cycleT;  trs;  capacity;   weeklyC;
  monthylyC; annualC;   machineO;   annualO;  annualM;   numb;  prodm;
  totalm;   totallab;   startc;   totalp;   cost;  start;    laboC;
  machineC;   operation;  operationcc;   enrgyr;    partss;   partsh;
  scrappp;   ct;    partpa;  enrgc;    nump;  startcc;    totale;
  nheads;  partA;   totalmc;  combine;    combim;  exw;    scrapm;
  salesa;  rd;  profit;    totala;   pack;  warehouse;  trsporta ;
  partb;  boxspa;   nbpa;  euro;  moqp;
  currentDate = new Date().toLocaleDateString();
  idC;
  idP;
  salesvaleur;
  detailsprojet;
  detailsclient;
  liste;
  user;
  role;
  document: any ;

  constructor(private actvroute: ActivatedRoute, private serviceDevis: DevisService, private formBuilder: FormBuilder,
              private familySer: FamilyService, private ServiceMat: MaterialService, private serviceProjet: ProjetService ,
              private serviceClient: ClientService , private servmachinepar: ParamService, private serviceCarton: CartonService ,
              private serviceSachet: SachetService , private serviceSeparation: SeparationService , private servicepalette: PaletteService ,
              private serviceTransport: TransportService , private serviceColorant: ColorantService, private serviceInsert: InserrtService,
              private serviceMachine: MaterialService , private router: Router, private authService: AuthentificationService ) {

    this.idClient = this.actvroute.params['value']['idClient'] ;
    this.idProjet = this.actvroute.params['value']['idProjet'] ;

    this.serviceProjet.getbyId(this.idProjet).subscribe(result => {
       this.detailsprojet = result;
       console.log('detailsprojet', this.detailsprojet);
       this.document = 'FCOM-03' + '-' + this.detailsprojet.indicer + '-' + this.detailsprojet.anne + this.detailsprojet.mois +
         this.detailsprojet.numconsult;
       // this.name = this.application.piecejointe;
       // this.xpath = this.path + this.name;
     });

    this.serviceClient.getbyId(this.idClient).subscribe(result => {
      this.detailsclient = result;
      console.log('detailsclient', this.detailsclient);


      // this.name = this.application.piecejointe;
      // this.xpath = this.path + this.name;
    });
  }


  ngOnInit() {
    this.getfamilly();
    this.getcarton();
    this.getsachet();
    this.getpalette();
    this.getseparation();
    this.getseparationv();
    this.gettransport();
    this.getcolorant();
    this.getinsert();
    this.getmachine();
    this.getprofileadmine();
    this.getallmach();
    this.addDevis = this.formBuilder.group({
      id: ['', Validators.required],
      date: this.currentDate,
      num: ['', Validators.required],
      numdoc: ['', Validators.required],
      numdocdev: ['', Validators.required],
      customer: ['', Validators.required],
      segment: ['', Validators.required],
      rfq: ['', Validators.required],
      numCus: ['', Validators.required],
      dateR: ['', Validators.required],
      project: ['', Validators.required],
      buyer: ['', Validators.required],
      deliveryAd: ['', Validators.required],
      incoterm: ['', Validators.required],
      business: ['', Validators.required],
      lta: ['', Validators.required],
      sopU: ['', Validators.required],
      sopD: ['', Validators.required],
      sopT: ['', Validators.required],
      sopQ: ['', Validators.required],
      sopC: ['', Validators.required],
      annualQua: ['', Validators.required],
      years: ['', Validators.required],
      life: ['', Validators.required],
      sop: ['', Validators.required],
      sopUn: ['', Validators.required],
      sopDe: ['', Validators.required],
      sopTr: ['', Validators.required],
      sopQu: ['', Validators.required],
      sopCi: ['', Validators.required],
      sopSe: ['', Validators.required],
      sopSet: ['', Validators.required],
      sopWe: ['', Validators.required],
      sopNe: ['', Validators.required],
      sopDi: ['', Validators.required],
      miniPro: ['', Validators.required],
      miniOrd: ['', Validators.required],
      deuxD: ['', Validators.required],
      troisD: ['', Validators.required],
      partDes: ['', Validators.required],
      photo: ['' , Validators.required],
      partNam: ['', Validators.required],
      partNum: ['', Validators.required],
      lenghtP: ['', Validators.required],
      weidthP: ['', Validators.required],
      hauteurP: ['', Validators.required],
      partSur: ['', Validators.required],
      materialFa: ['', Validators.required],
      materialDe: ['', Validators.required],
      supplier: ['', Validators.required],
      incotermS: ['', Validators.required],
      sales: ['', Validators.required],
      partN: ['', Validators.required],
      handlingg: ['', Validators.required],
      volum: ['', Validators.required],
      densityy: ['', Validators.required],
      netW: ['', Validators.required],
      estimatedSp: ['', Validators.required],
      estimated: ['', Validators.required],
      regrind: ['', Validators.required],
      pourcentageSp: ['', Validators.required],
      injectedW: ['', Validators.required],
      sprueU: ['', Validators.required],
      sprueJ: ['', Validators.required],
      scrap: ['', Validators.required],
      grossW: ['', Validators.required],
      transport: ['', Validators.required],
      delivered: ['', Validators.required],
      pourcentageMa: ['', Validators.required],
      materialW: ['', Validators.required],
      batch: ['', Validators.required],
      annualPur: ['', Validators.required],
      netto: ['', Validators.required],
      rate: ['', Validators.required],
      pourcentageNe: ['', Validators.required],
      parts: ['', Validators.required],
      pressuree: ['', Validators.required],
      length: ['', Validators.required],
      width: ['', Validators.required],
      thikness: ['', Validators.required],
      ray: ['', Validators.required],
      section: ['', Validators.required],
      llong: ['', Validators.required],
      clamping: ['', Validators.required],
      unit: ['', Validators.required],
      colorant: ['', Validators.required],
      perctcol: ['', Validators.required],
      grcol: ['', Validators.required],
      nettocol: ['', Validators.required],
      ratecol: ['', Validators.required],
      transpcolor: ['', Validators.required],
      scrapcol: ['', Validators.required],
      handcol: ['', Validators.required],
      nettool: ['', Validators.required],
      assycol: ['', Validators.required],
      costcolorn: ['', Validators.required],
      totalMat: ['', Validators.required],
      description: ['', Validators.required],
      specification: ['', Validators.required],
      supplierP: ['', Validators.required],
      grossP: ['', Validators.required],
      nettoP: ['', Validators.required],
      rateP: ['', Validators.required],
      transportP: ['', Validators.required],
      scrapP: ['', Validators.required],
      handlingP: ['', Validators.required],
      pourNet: ['', Validators.required],
      partsAss: ['', Validators.required],
      insertCost: ['', Validators.required],
      total: ['', Validators.required],
      operationcc: ['', Validators.required],
      machineT: ['', Validators.required],
      machineR: ['', Validators.required],
      partC: ['', Validators.required],
      cycleT: ['', Validators.required],
      partH: ['', Validators.required],
      nheads: ['', Validators.required],
      direct: ['', Validators.required],
      scrapC: ['', Validators.required],
      machineC: ['', Validators.required],
      laboC: ['', Validators.required],
      partA: ['', Validators.required],
      trs: ['', Validators.required],
      capacity: ['', Validators.required],
      weeklyC: ['', Validators.required],
      monthylyC: ['', Validators.required],
      annualC: ['', Validators.required],
      machineO: ['', Validators.required],
      annualO: ['', Validators.required],
      annualM: ['', Validators.required],
      cost: ['', Validators.required],
      start: ['', Validators.required],
      numb: ['', Validators.required],
      prodm: ['', Validators.required],
      totalm: ['', Validators.required],
      totallab: ['', Validators.required],
      startc: ['', Validators.required],
      totalp: ['', Validators.required],
      operation: ['', Validators.required],
      enrgyr: ['', Validators.required],
      partss: ['', Validators.required],
      partsh: ['', Validators.required],
      scrappp: ['', Validators.required],
      ct: ['', Validators.required],
      partpa: ['', Validators.required],
      enrgc: ['', Validators.required],
      nump: ['', Validators.required],
      startcc: ['', Validators.required],
      totale: ['', Validators.required],
      totalmc: ['', Validators.required],
      scrapm: ['', Validators.required],
      salesa: ['', Validators.required],
      rd: ['', Validators.required],
      profit: ['', Validators.required],
      other: ['', Validators.required],
      combine: ['', Validators.required],
      combim: ['', Validators.required],
      exw: ['', Validators.required],
      totala: ['', Validators.required],
      pack: ['', Validators.required],
      warehouse: ['', Validators.required],
      trsporta: ['', Validators.required],
      freqncy: ['', Validators.required],
      boxt: ['', Validators.required],
      boxd: ['', Validators.required],
      partb: ['', Validators.required],
      boxspa: ['', Validators.required],
      nbpa: ['', Validators.required],
      euro: ['', Validators.required],
      moqp: ['', Validators.required],
      marge: ['', Validators.required],
      rebut: ['', Validators.required],
      dbox:  ['', Validators.required],
      qtyb: ['', Validators.required],
      priceb: ['', Validators.required],
      poub: ['', Validators.required],
      dsac: ['', Validators.required],
      qtys: ['', Validators.required],
      prices: ['', Validators.required],
      pous: ['', Validators.required],
      dint: ['', Validators.required],
      qtyi: ['', Validators.required],
      pricei: ['', Validators.required],
      poui: ['', Validators.required],
      dv: ['', Validators.required],
      qtyv: ['', Validators.required],
      pricev: ['', Validators.required],
      pouv: ['', Validators.required],
      dp: ['', Validators.required],
      qtyp: ['', Validators.required],
      pricep: ['', Validators.required],
      poup: ['', Validators.required],
      numpieces: ['', Validators.required],
      numuc: ['', Validators.required],
      numproducts: ['', Validators.required],
      costof: ['', Validators.required],
      sellingprice: ['', Validators.required],
      plande: ['', Validators.required],
      costt: ['', Validators.required],
      salet: ['', Validators.required],
      trac: this.user,
    });
    if ( this.listcount.length === 0) {
      this.addDevis.get('years').setValue(1);
    }
   /* if (this.addDevis.value.annualQua == 0) {
      this.addDevis.get('miniPro').setValue(0);
    }*/

  }

  get f() {
    return this.addDevis.controls;
  }
  onSubmit() {
    this.submitted = true;

    console.log('addform', this.addDevis.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addDevis.value, null, 4));
  }
  add() {
    this.addDevis.patchValue({
      supplier: this.detailmater.supplierr,
      incotermS: this.detailmater.incoterm,
      sales: this.detailmater.price,
      densityy: this.detailmater.density,
      pressuree: this.detailmater.pressure,
  /*    rateP: this.detailinsert.price,
      transportP: this.detailinsert.trans,
      scrapP: this.detailinsert.scrap,*/
    });
    this.serviceDevis.ajout(this.idClient, this.idProjet, this.addDevis.value).subscribe(res => {
      console.log('erreur');
      console.log(res);
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Quotation has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });
    // this.router.navigate(['/addQuotation']);
  }

  getprofileadmine() {
    this.authService.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      this.role = res['roles'][0]['roleName'];
      // console.log(res['roles'][0]['roleName']);
    });
  }
  /*edit() {

    console.log('formgroup', this.addDevis.value);
    this.serviceDevis.update(this.idDevis , this.idClient, this.idProjet, this.addDevis.value).subscribe(res => {
      console.log(res);
      /!*Swal.fire({ position: 'center'});*!/
      /!*this.toastr.success('validation faite avec suus');*!/
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
  }*/
/*  delete() {
    console.log('formgroup', this.addDevis.value);
    this.serviceDevis.delete(this.idDevis).subscribe(res => {
      console.log(res);
    });
  }*/
  onReset() {
    this.submitted = false;
    this.addDevis.reset();
  }

  countsop() {
    if (this.addDevis.value.sop != null) {
      this.listcount.push(this.addDevis.value.sop);
    }
    console.log('listcount' , this.listcount.length);
  }
  countsop1() {
    if (this.addDevis.value.sopUn != null) {
      this.listcount.push(this.addDevis.value.sopUn);
    }
    console.log( 'listcount' , this.listcount.length);
  }
  countsop2() {
    if (this.addDevis.value.sopDe != null) {
      this.listcount.push(this.addDevis.value.sopDe);
    }
    console.log( 'listcount' , this.listcount.length);
  }
  countsop3() {
    if (this.addDevis.value.sopTr != null) {
      this.listcount.push(this.addDevis.value.sopTr);
    }
    console.log('listcount' , this.listcount.length);
  }
  countsop4() {
    if (this.addDevis.value.sopQu != null) {
      this.listcount.push(this.addDevis.value.sopQu);
    }
    console.log('listcount' , this.listcount.length);
  }
  countsop5() {
    if (this.addDevis.value.sopCi != null) {
      this.listcount.push(this.addDevis.value.sopCi);
    }
    console.log('listcount' , this.listcount.length);
  }
  countsop6() {
    if (this.addDevis.value.sopSe != null) {
      this.listcount.push(this.addDevis.value.sopSe);
    }
    console.log('listcount' , this.listcount.length);
  }
  countsop7() {
    if (this.addDevis.value.sopSet != null) {
      this.listcount.push(this.addDevis.value.sopSet);
    }
    console.log('listcount' , this.listcount.length);
  }
  countsop8() {
    if (this.addDevis.value.sopWe != null) {
      this.listcount.push(this.addDevis.value.sopWe);
    }
    console.log('listcount' , this.listcount.length);
  }
  countsop9() {
    if (this.addDevis.value.sopNe != null) {
      this.listcount.push(this.addDevis.value.sopNe);
    }
    console.log('listcount' , this.listcount.length);
  }
  countsop10() {
    if (this.addDevis.value.sopDi != null) {
      this.listcount.push(this.addDevis.value.sopDi);
    }
    console.log('listcount' , this.listcount.length);
  }
  calculate(): void {
    console.log('this.sop', this.addDevis.value.sop);
    console.log('this.sopUn', this.addDevis.value.sopUn);
    console.log('this.sopDe', this.addDevis.value.sopDe);
    console.log('this.sopTr', this.addDevis.value.sopTr);
    console.log('this.sopQu', this.addDevis.value.sopQu);
    console.log('this.sopCi', this.addDevis.value.sopCi);
    console.log('this.sopSe', this.addDevis.value.sopSe);
    console.log('this.sopSet', this.addDevis.value.sopSet);
    console.log('this.sopWe', this.addDevis.value.sopWe);
    console.log('this.sopNe', this.addDevis.value.sopNe);
    console.log('this.sopDi', this.addDevis.value.sopDi);

    this.addDevis.get('life').setValue(this.addDevis.value.sop + this.addDevis.value.sopUn + this.addDevis.value.sopDe
      + this.addDevis.value.sopTr + this.addDevis.value.sopQu + this.addDevis.value.sopCi + this.addDevis.value.sopSe
      + this.addDevis.value.sopSet + this.addDevis.value.sopWe + this.addDevis.value.sopNe + this.addDevis.value.sopDi);
    console.log(this.addDevis.value.life + ' :life');
     // test utilise pour faire calcul annualQua
    if (this.listcount.length > 0) {
      this.addDevis.get('annualQua').setValue(this.addDevis.get('life').value / this.listcount.length );

    }
  }
  calculateannu(): void {
    console.log('this.life', this.addDevis.value.life);
    console.log('this.years', this.addDevis.value.years);
    if (this.addDevis.value.years > 0) {
      this.addDevis.get('annualQua').setValue(this.addDevis.value.life / this.addDevis.value.years);
      console.log(this.addDevis.value.annualQua + ' is not a number');
    }
    /*   test utilise pour faire calcul miniPro */
    if (this.addDevis.value.annualQua > 0) {
      this.addDevis.get('miniPro').setValue((this.addDevis.get('annualQua').value) / 11 );
    }
  }
  calculatep(): void {
    console.log('this.lenghtP', this.addDevis.value.lenghtP);
    console.log('this.weidthP', this.addDevis.value.weidthP);
    console.log('this.hauteurP', this.addDevis.value.hauteurP);

    this.addDevis.get('partSur').setValue(this.addDevis.value.lenghtP * this.addDevis.value.weidthP * this.addDevis.value.hauteurP );
    console.log(this.addDevis.value.partSur + ' is not a number');
  }
  calculatenet(): void {
    console.log('this.densityy', this.detailmater.density);
    console.log('this.volum', this.addDevis.value.volum);
    if ( this.detailmater.density > 0) {
      this.addDevis.get('netW').setValue( this.detailmater.density * this.addDevis.value.volum);
      console.log(this.addDevis.value.netW + ' is not a number');
    }
  }
  calculates(): void {
    console.log('this.densityy', this.detailmater.density);
    console.log('this.section', this.addDevis.value.section);
    console.log('this.llong', this.addDevis.value.llong);
    if ( this.detailmater.density > 0) {
      this.addDevis.get('estimatedSp').setValue( this.detailmater.density * this.addDevis.value.section * this.addDevis.value.llong);
      console.log(this.addDevis.value.estimatedSp + ' is not a number');
      this.estimatedf = this.addDevis.value.estimatedSp;
    }
  }
  calculatenets(): void {
    console.log('this.densityy', this.detailmater.density);
    console.log('this.estimatedSp', this.addDevis.value.estimatedSp);
    if ( this.detailmater.density > 0 && this.addDevis.value.estimatedSp > 0) {
      this.addDevis.get('estimated').setValue( this.detailmater.density * this.addDevis.value.estimatedSp);
      console.log(this.addDevis.value.estimated + ' valeur final');
    }
  }
  calcu(): void {
    console.log('this.nettoP', this.addDevis.value.nettoP);
    console.log('this.grossP', this.addDevis.value.grossP);
    this.addDevis.get('pourNet').setValue( this.addDevis.value.nettoP / this.addDevis.value.grossP);
    console.log(this.addDevis.value.pourNet + ' is not a number');
  }

  calculatl(): void {
    console.log('this.netW', this.addDevis.value.netW);
    console.log('this.estimated', this.addDevis.value.estimated);
    if ( this.addDevis.value.netW > 0 && this.addDevis.value.estimated > 0) {
      this.addDevis.get('injectedW').setValue( this.addDevis.value.netW + this.addDevis.value.estimated);
      console.log(this.addDevis.value.injectedW + 'valeur');
    }
  }

  calc(): void {
    console.log('this.regrind', this.addDevis.value.regrind );
    console.log('this.pourcentageSp', this.addDevis.value.pourcentageSp);
    console.log('this.injectedW', this.addDevis.value.injectedW);
    if ( this.addDevis.value.regrind === 'YES') {
      this.addDevis.get('sprueU').setValue( this.addDevis.value.pourcentageSp * this.addDevis.value.injectedW);
      console.log(this.addDevis.value.sprueU + 'valeucr');
    } else {
      this.addDevis.get('sprueU').setValue( 0);
      console.log(this.addDevis.value.sprueU + 'valeucr');
    }
  }

  caatl(): void {
    console.log('this.estimated ', this.addDevis.value.estimated);
    console.log('this.sprueU', this.addDevis.value.sprueU);
    this.addDevis.get('sprueJ').setValue( this.addDevis.value.estimated - this.addDevis.value.sprueU);
    console.log(this.addDevis.value.sprueJ + 'valeur');
  }

  cagrl(): void {
    console.log('this.sprueJ', this.addDevis.value.sprueJ);
    console.log('this.netW', this.addDevis.value.netW);
    console.log('this.scrap ', this.addDevis.value.scrap);
    this.addDevis.get('grossW').setValue((this.addDevis.value.sprueJ + this.addDevis.value.netW) / (1 - this.addDevis.value.scrap));
    console.log(this.addDevis.value.grossW + 'ok');
  }

  catl(): void {
    console.log('this.grossW', this.addDevis.value.grossW);
    console.log('this.transport', this.addDevis.value.transport);

    this.addDevis.get('transport').setValue((this.addDevis.value.transport * this.addDevis.value.grossW));
    console.log(this.addDevis.value.transport + 'okk');
  }

  csl(): void {
    console.log('this.price', this.detailmater.price);
    console.log('this.transport', this.addDevis.value.transport);

    this.addDevis.get('delivered').setValue( (Number) (this.detailmater.price) + this.addDevis.value.transport);
    console.log(this.addDevis.value.delivered + 'ojkk');
  }

  cslm(): void {
    console.log('this.pourcentageMa', this.addDevis.value.pourcentageMa);
    console.log('this.grossW', this.addDevis.value.grossW);

    this.addDevis.get('materialW').setValue(this.addDevis.value.pourcentageMa * this.addDevis.value.grossW);
    console.log(this.addDevis.value.materialW + 'ojkk');
  }

  cslmb(): void {
    console.log('this.miniPro', this.addDevis.value.miniPro);
    console.log('this.grossW', this.addDevis.value.grossW);

    this.addDevis.get('batch').setValue((this.addDevis.value.grossW * this.addDevis.value.miniPro) / 1000);
    console.log(this.addDevis.value.batch + 'ojkk');
  }

  cslmjpb(): void {
    console.log('this.annualQua', this.addDevis.value.annualQua);
    console.log('this.grossW', this.addDevis.value.grossW);

    this.addDevis.get('annualPur').setValue((this.addDevis.value.grossW * this.addDevis.value.annualQua) / 1000);
    console.log(this.addDevis.value.annualPur + 'ojkk');
  }

  csnet(): void {
    console.log('this.density', this.detailmater.density);
    console.log('this.volum', this.addDevis.value.volum);

    this.addDevis.get('netto').setValue((this.detailmater.density * this.addDevis.value.volum / 1000) + 0.0006);
    console.log(this.addDevis.value.netto + 'ojkk');
  }

  csnetp(): void {
    console.log('this.netto', this.addDevis.value.netto);
    console.log('this.grossW', this.addDevis.value.grossW);

    this.addDevis.get('pourcentageNe').setValue(this.addDevis.value.netto / this.addDevis.value.grossW);
    console.log(this.addDevis.value.pourcentageNe + 'ojkk');
  }

  crp(): void {
    console.log('this.length', this.addDevis.value.length);
    console.log('this.width', this.addDevis.value.width);
    console.log('this.pressure', this.detailmater.pressure);
    console.log('this.partC', this.addDevis.value.partC);


    if ( this.addDevis.value.length !== 0 && this.addDevis.value.width !== 0 ) {
    this.addDevis.get('clamping').setValue(this.addDevis.value.length * this.addDevis.value.width *  this.detailmater.pressure
      * this.addDevis.value.partC * 1.1);
    console.log(this.addDevis.value.clamping + 'ojkk');
    }
    if (this.addDevis.value.ray !== 0  ) {
      console.log('this.ray', this.addDevis.value.ray);
      this.addDevis.get('clamping').setValue((Number) (this.detailmater.pressure) * this.addDevis.value.ray * this.addDevis.value.ray
       * this.addDevis.value.partC * 1.1 * 3.14 );
      console.log(this.addDevis.value.clamping + 'ojkk');
  }

  }
  cttpk(): void {
    console.log('this.transport', this.addDevis.value.transport);
    console.log('this.grossW', this.addDevis.value.grossW);
    console.log('this.rate', this.addDevis.value.rate);
    console.log('this.scrap', this.addDevis.value.scrap);
    console.log('this.handling', this.addDevis.value.handlingg);
    console.log('this.parts', this.addDevis.value.parts);

    this.addDevis.get('unit').setValue((this.addDevis.value.transport + (this.addDevis.value.grossW * this.addDevis.value.rate ) /
      (1 - this.addDevis.value.scrap) * (1 + this.addDevis.value.handlingg)) * this.addDevis.value.parts);
    console.log(this.addDevis.value.unit + 'ojkk');
  }

  cj(): void {
    console.log('this.perctcol', this.addDevis.value.perctcol);
    console.log('this.grossW', this.addDevis.value.grossW);

    this.addDevis.get('grcol').setValue( this.addDevis.value.grossW * this.addDevis.value.perctcol);
    console.log(this.addDevis.value.grcol + 'ojkk');
  }

  /* calcul Inserts cost*/
  calcuw(): void {
    console.log('this.trans', this.detailinsert.trans);
    console.log('this.grossP', this.addDevis.value.grossP);
    console.log('this.price', this.detailinsert.price);
    console.log('this.scrap', this.detailinsert.scrap);
    console.log('this.handlingP', this.addDevis.value.handlingP);
    console.log('this.partsAss', this.addDevis.value.partsAss);
    if ( this.detailinsert.trans > 0 && this.detailinsert.price > 0 && this.detailinsert.scrap > 0) {
      this.addDevis.get('insertCost').setValue((this.detailinsert.trans + (this.addDevis.value.grossP * this.detailinsert.price) /
        (1 - this.detailinsert.scrap) * (1 + this.addDevis.value.handlingP)) * this.addDevis.value.partsAss);
      console.log(this.addDevis.value.insertCost + ' oknumber');
    }
  }

  getfamilly() {

    this.familySer.all().subscribe(result => {
      this.listfamily = result;
      console.log('listfamily', this.listfamily);
    });
  }
  onChangeSelected(event) {

    this.selectfamily = event.target.value;
    console.log('selectfamilychoisi', this.selectfamily);

    this.ServiceMat.getbyfamily(this.selectfamily).subscribe(result => {

      this.listmaterial = result ;
      console.log('listMaterial', this.listmaterial);
    });
  }
  public onChangeSelectedMaterial(event) {
    this.selectmaterial = event.target.value;

    this.ServiceMat.getbyId(this.selectmaterial).subscribe((result => {
      this.detailmater = result;
      console.log('resultmethode' , result);
      console.log('selectmaterialchoisi', this.selectmaterial);
      console.log('detailmater', this.detailmater);
}));
  }
  public onChangeSelectedProjet(event) {
    this.selectprojet = event.target.value;

    this.serviceProjet.getbyId(this.selectprojet).subscribe((result => {
      console.log('resultmethode' , result);
      this.detailprojet = result;
      console.log('selectprojetchoisi', this.selectprojet);
      console.log('detailprojet', this.detailprojet);
    }));
  }
   getcarton() {
    this.serviceCarton.all().subscribe(result => {
      this.listcarton = result;
      console.log('listcarton', this.listcarton);
    });
  }
  public onChangeSelectedCarton(event) {
    this.selectcarton = event.target.value;

    this.serviceCarton.getbyId(this.selectcarton).subscribe((result => {
      this.detailcarton = result;
      console.log('resultmethode' , result);
      console.log('selectcartonchoisi', this.selectcarton);
      console.log('detailcarton', this.detailcarton);
    }));
  }
  getsachet() {

    this.serviceSachet.all().subscribe(result => {
      this.listsachet = result;
      console.log('listsachet', this.listsachet);
    });
  }
  public onChangeSelectedSachet(event) {
    this.selectsachet = event.target.value;

    this.serviceSachet.getbyId(this.selectsachet).subscribe((result => {
      this.detailsachet = result;
      console.log('resultmethode' , result);
      console.log('selectsachetchoisi', this.selectsachet);
      console.log('detailsachet', this.detailsachet);
    }));
  }
  getseparation() {

    this.serviceSeparation.all().subscribe(result => {
      this.listseparation = result;
      console.log('listseparation', this.listseparation);
    });
  }
  onChangeSelectedSeparation(event) {

    this.selectseparation = event.target.value;
    console.log('selectseparationchoisi', this.selectseparation);

    this.serviceSeparation.getbyId(this.selectseparation).subscribe(result => {

      this.detailseparation = result ;
      console.log('detailseparation', this.detailseparation);
    });
  }
  getseparationv() {

    this.serviceSeparation.all().subscribe(result => {
      this.listseparationv = result;
      console.log('listseparationv', this.listseparationv);
    });
  }
  onChangeSelectedSeparationv(event) {

    this.selectseparationv = event.target.value;
    console.log('selectseparationvchoisi', this.selectseparationv);

    this.serviceSeparation.getbyId(this.selectseparationv).subscribe(result => {

      this.detailseparationv = result ;
      console.log('detailseparationv', this.detailseparationv);
    });
  }
  getpalette() {

    this.servicepalette.all().subscribe(result => {
      this.listpalette = result;
      console.log('listpalette', this.listpalette);
    });
  }
  onChangeSelectedPalette(event) {

    this.selectpalette = event.target.value;
    console.log('selectpalettechoisi', this.selectpalette);

    this.servicepalette.getbyId(this.selectpalette).subscribe(result => {

      this.detailpalette = result ;
      console.log('detailpalette', this.detailpalette);
    });
  }
  gettransport() {
    this.serviceTransport.all().subscribe(result => {
      this.listtransport = result;
      console.log('listtransport', this.listtransport);
    });
  }
  onChangeSelectedTransport(event) {
    this.selecttransport = event.target.value;
    console.log('selecttransportchoisi', this.selecttransport);

    this.serviceTransport.getbyId(this.selecttransport).subscribe(result => {

      this.detailtransport = result ;
      console.log('detailtransport', this.detailtransport);
    });
  }
  getcolorant() {
    this.serviceColorant.all().subscribe(result => {
      this.listcolorant = result;
      console.log('listcolorant', this.listcolorant);
    });
  }
  onChangeSelectedColorant(event) {

    this.selectcolorant = event.target.value;
    console.log('selectcolorantchoisi', this.selectcolorant);

    this.serviceColorant.getbyId(this.selectcolorant).subscribe(result => {

      this.detailcolorant = result ;
      console.log('detailcolorant', this.detailcolorant);
    });
  }
  getinsert() {
    this.serviceInsert.all().subscribe(result => {
      this.listinsert = result;
      console.log('listinsert', this.listinsert);
    });
  }
  onChangeSelectedInsert(event) {

    this.selectinsert = event.target.value;
    console.log('selectinsertchoisi', this.selectinsert);

    this.serviceInsert.getbyId(this.selectinsert).subscribe(result => {

      this.detailinsert = result ;
      console.log('detailinsert', this.detailinsert);
    });
  }
  getmachine() {
    this.serviceMachine.all().subscribe(result => {
      this.listmachine = result;
      console.log('listmachine', this.listmachine);
    });
  }
  onChangeSelectedMachine(event) {

    this.selectmachine = event.target.value;
    console.log('selectmachinechoisi', this.selectmachine);

    this.serviceMachine.getbyId(this.selectmachine).subscribe(result => {

      this.detailmachine = result ;
      console.log('detailmachine', this.detailmachine);
    });
  }
  getallmach() {
    this.servmachinepar.all().subscribe((result: any) => {
      this.detailmachinep = result.filter ((el) => el.customer === this.detailsclient.fullname);
      console.log('handling', this.detailmachinep[0].handling);
    });
  }
/*
  getmachineparam() {

    this.servmachinepar.getMachineParambycustomer(result => {

      this.detailmachinep = result;

      console.log('detailmachinep', this.detailmachinep);
    });
  }*/



}

