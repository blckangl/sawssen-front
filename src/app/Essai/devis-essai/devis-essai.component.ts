import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {DevisEssaiService} from '../../services/devis-essai.service';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-devis-essai',
  templateUrl: './devis-essai.component.html',
  styleUrls: ['./devis-essai.component.scss']
})
export class DevisEssaiComponent implements OnInit {
  iddevisEssai; listdevisEssai; selectdevisEssai; detaildevisESsai;
  listclient; client;  selectclient;  idClient;
  currentDate = new Date().toLocaleDateString();
  addDevisEssai: FormGroup;
  submitted = false;
  constructor(private actvroute: ActivatedRoute, private  servclient: ClientService, private  sevidevisess: DevisEssaiService ,
              private formBuilder: FormBuilder , private router: Router ) {

  }
  ngOnInit() {
    this.getallclient();
    this.getallessaidevis();
    this.addDevisEssai = this.formBuilder.group({
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
    return this.addDevisEssai.controls;
  }

  onSubmit() {
    this.submitted = true;

    console.log('addform', this.addDevisEssai.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addDevisEssai.value, null, 4));
  }
  getallessaidevis() {
    this.sevidevisess.getall().subscribe(result => {

      this.listdevisEssai = result;

      console.log(' listdevisEssai', this.listdevisEssai);

    });
  }
  add() {
    console.log('formgroup', this.addDevisEssai.value);
    this.sevidevisess.ajout(this.addDevisEssai.value).subscribe(res => {
      console.log(res);
      this.getallessaidevis();
      this.router.navigate(['/allDevEss']);
    });
    Swal.fire({
      position: 'center',
      title: 'Added Successfully',
      html: 'Trial quote has been added',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: 500,
    });
  }
  calcul1(): void {
    console.log('this.cosma', this.addDevisEssai.value.cosma);
    console.log('this.cospu', this.addDevisEssai.value.cospu);
    console.log('this.cosu', this.addDevisEssai.value.cosu);
    this.addDevisEssai.get('cosd').setValue(this.addDevisEssai.value.cosma + this.addDevisEssai.value.cospu +
      this.addDevisEssai.value.cosu);
    console.log(this.addDevisEssai.value.cosd + ' :cosd');
  }
  calcul2(): void {
    console.log('this.cosd', this.addDevisEssai.value.cosd );
    console.log('this.cost', this.addDevisEssai.value.cost);
    this.addDevisEssai.get('cosq').setValue(this.addDevisEssai.value.cosd * this.addDevisEssai.value.cost );
    console.log(this.addDevisEssai.value.cosq + ' :cosq');
  }
  calcul3(): void {
    console.log('this.offma', this.addDevisEssai.value.offma  );
    console.log('this.offpur', this.addDevisEssai.value.offpur );
    console.log('this.offeoth', this.addDevisEssai.value.offeoth );
    this.addDevisEssai.get('offtota').setValue(this.addDevisEssai.value.offma + this.addDevisEssai.value.offpur +
      this.addDevisEssai.value.offeoth);
    console.log(this.addDevisEssai.value.offtota + ' :offtota');
  }
  calcul4(): void {
    console.log('this.offtota', this.addDevisEssai.value.offtota);
    console.log('this.offmar', this.addDevisEssai.value.offmar);

    this.addDevisEssai.get('offtot').setValue(this.addDevisEssai.value.offtota * this.addDevisEssai.value.offmar );
    console.log(this.addDevisEssai.value.offtot + ' :offtot');
  }
  calcul5(): void {
    console.log('this.proco', this.addDevisEssai.value.proco);
    console.log('this.procop', this.addDevisEssai.value.procop);
    console.log('this.propc', this.addDevisEssai.value.propc);
    console.log('this.proth', this.addDevisEssai.value.proth);
    this.addDevisEssai.get('prto').setValue(this.addDevisEssai.value.proco  + this.addDevisEssai.value.procop  +
      this.addDevisEssai.value.propc + this.addDevisEssai.value.proth);
    console.log(this.addDevisEssai.value.prto + ' :prto');
  }
  calcul6(): void {
    console.log('this.prto ', this.addDevisEssai.value.prto );
    console.log('this.prma', this.addDevisEssai.value.prma);

    this.addDevisEssai.get('prat').setValue(this.addDevisEssai.value.prto  * this.addDevisEssai.value.prma );
    console.log(this.addDevisEssai.value.prat + ' :prat');
  }
  calcul7(): void {
    console.log('this.prmc', this.addDevisEssai.value.prmc);
    console.log('this.pr ', this.addDevisEssai.value.pr );
    console.log('this.prtc ', this.addDevisEssai.value.prtc );
    console.log('this.prot', this.addDevisEssai.value.prot);
    this.addDevisEssai.get('ofpr').setValue(this.addDevisEssai.value.prmc  + this.addDevisEssai.value.pr  +
      this.addDevisEssai.value.prtc  + this.addDevisEssai.value.prot);
    console.log(this.addDevisEssai.value.ofpr + ' :ofpr');
  }
  calcul8(): void {
    console.log('this.ofpr', this.addDevisEssai.value.ofpr  );
    console.log('this.ofpa', this.addDevisEssai.value.ofpa);

    this.addDevisEssai.get('ofd').setValue(this.addDevisEssai.value.ofpr  * this.addDevisEssai.value.ofpa );
    console.log(this.addDevisEssai.value.ofd + ' :ofd');
  }
  calcul9(): void {
    console.log('this.come', this.addDevisEssai.value.come);
    console.log('this.pme', this.addDevisEssai.value.pme);

    this.addDevisEssai.get('comec').setValue(this.addDevisEssai.value.come  + this.addDevisEssai.value.pme );
    console.log(this.addDevisEssai.value.comec + ' :comec');
  }
  calcul10(): void {
    console.log('this.comec ', this.addDevisEssai.value.comec);
    console.log('this.marme', this.addDevisEssai.value.marme);

    this.addDevisEssai.get('tome').setValue(this.addDevisEssai.value.comec * this.addDevisEssai.value.marme );
    console.log(this.addDevisEssai.value.tome + ' :tome');
  }
  calcul11(): void {
    console.log('this.ofme', this.addDevisEssai.value.ofme);
    console.log('this.mgme', this.addDevisEssai.value.mgme);

    this.addDevisEssai.get('tame').setValue(this.addDevisEssai.value.ofme  + this.addDevisEssai.value.mgme );
    console.log(this.addDevisEssai.value.tame + ' :tame');
  }
  calcul12(): void {
    console.log('this.tame ', this.addDevisEssai.value.tame );
    console.log('this.txme', this.addDevisEssai.value.txme);

    this.addDevisEssai.get('tvme').setValue(this.addDevisEssai.value.tame   * this.addDevisEssai.value.txme );
    console.log(this.addDevisEssai.value.tvme + ' :tvme');
  }
  calcul13(): void {
    console.log('this.prc', this.addDevisEssai.value.prc);
    console.log('this.prth', this.addDevisEssai.value.prth);

    this.addDevisEssai.get('prti').setValue(this.addDevisEssai.value.prc + this.addDevisEssai.value.prth );
    console.log(this.addDevisEssai.value.prti + ' :prti');
  }
  calcul14(): void {
    console.log('this.prti ', this.addDevisEssai.value.prti );
    console.log('this.prmq', this.addDevisEssai.value.prmq);

    this.addDevisEssai.get('prtt').setValue(this.addDevisEssai.value.prti  * this.addDevisEssai.value.prmq );
    console.log(this.addDevisEssai.value.prtt + ' :prtt');
  }
  calcul15(): void {
    console.log('this.prr ', this.addDevisEssai.value.prr );
    console.log('this.pry', this.addDevisEssai.value.pry);

    this.addDevisEssai.get('proo').setValue(this.addDevisEssai.value.prr  + this.addDevisEssai.value.pry );
    console.log(this.addDevisEssai.value.proo + ' :proo');
  }
  calcul16(): void {
    console.log('this.proo  ', this.addDevisEssai.value.proo  );
    console.log('this.prx', this.addDevisEssai.value.prx);

    this.addDevisEssai.get('pra').setValue(this.addDevisEssai.value.proo   * this.addDevisEssai.value.prx );
    console.log(this.addDevisEssai.value.pra + ' :pra');
  }
  calcul17(): void {
    console.log('this.otc', this.addDevisEssai.value.otc);
    console.log('this.otco', this.addDevisEssai.value.otco);

    this.addDevisEssai.get('otss').setValue(this.addDevisEssai.value.otc + this.addDevisEssai.value.otco);
    console.log(this.addDevisEssai.value.otss + ' :otss');
  }
  calcul18(): void {
    console.log('this.otss', this.addDevisEssai.value.otss );
    console.log('this.otma', this.addDevisEssai.value.otma);

    this.addDevisEssai.get('otze').setValue(this.addDevisEssai.value.otss  * this.addDevisEssai.value.otma );
    console.log(this.addDevisEssai.value.otze + ' :otze');
  }
  calcul19(): void {
    console.log('this.oto ', this.addDevisEssai.value.oto );
    console.log('this.ott', this.addDevisEssai.value.ott);

    this.addDevisEssai.get('otsq').setValue(this.addDevisEssai.value.oto  + this.addDevisEssai.value.ott );
    console.log(this.addDevisEssai.value.otsq + ' :otsq');
  }
  calcul20(): void {
    console.log('this.otsq', this.addDevisEssai.value.otsq );
    console.log('this.otqs', this.addDevisEssai.value.otqs);

    this.addDevisEssai.get('otvg').setValue(this.addDevisEssai.value.otsq  * this.addDevisEssai.value.otqs );
    console.log(this.addDevisEssai.value.otvg + ' :otvg');
  }
  calcul21(): void {
    console.log('this.pcks', this.addDevisEssai.value.pcks  );
    console.log('this.pcke', this.addDevisEssai.value.pcke);

    this.addDevisEssai.get('pckss').setValue(this.addDevisEssai.value.pcks   + this.addDevisEssai.value.pcke );
    console.log(this.addDevisEssai.value.pckss + ' :pckss');
  }
  calcul22(): void {
    console.log('this.pckss', this.addDevisEssai.value.pckss);
    console.log('this.pcka', this.addDevisEssai.value.pcka);

    this.addDevisEssai.get('pckaq').setValue(this.addDevisEssai.value.pckss  * this.addDevisEssai.value.pcka );
    console.log(this.addDevisEssai.value.pckaq + ' :pckaq');
  }
  calcul23(): void {
    console.log('this.pckf', this.addDevisEssai.value.pckf);
    console.log('this.pckk', this.addDevisEssai.value.pckk);

    this.addDevisEssai.get('pckm').setValue(this.addDevisEssai.value.pckf   + this.addDevisEssai.value.pckk );
    console.log(this.addDevisEssai.value.pckm + ' :pckm');
  }
  calcul24(): void {
    console.log('this.pckm ', this.addDevisEssai.value.pckm );
    console.log('this.pckh', this.addDevisEssai.value.pckh);

    this.addDevisEssai.get('pckg').setValue(this.addDevisEssai.value.pckm  * this.addDevisEssai.value.pckh );
    console.log(this.addDevisEssai.value.pckg + ' :pckg');
  }
  calcul25(): void {
    console.log('this.prtm  ', this.addDevisEssai.value.prtm  );
    console.log('this.prtx', this.addDevisEssai.value.prtx);

    this.addDevisEssai.get('prtfe').setValue(this.addDevisEssai.value.prtm  + this.addDevisEssai.value.prtx );
    console.log(this.addDevisEssai.value.prtfe + ' :prtfe');
  }
  calcul26(): void {
    console.log('this.prtfe', this.addDevisEssai.value.prtfe );
    console.log('this.prtre', this.addDevisEssai.value.prtre);

    this.addDevisEssai.get('prtez').setValue(this.addDevisEssai.value.prtfe   * this.addDevisEssai.value.prtre );
    console.log(this.addDevisEssai.value.prtez + ' :prtez');
  }
  calcul27(): void {
    console.log('this.prtb', this.addDevisEssai.value.prtb );
    console.log('this.prtf', this.addDevisEssai.value.prtf);

    this.addDevisEssai.get('prtp').setValue(this.addDevisEssai.value.prtb  + this.addDevisEssai.value.prtf );
    console.log(this.addDevisEssai.value.prtp + ' :prtp');
  }
  calcul28(): void {
    console.log('this.prtp', this.addDevisEssai.value.prtp  );
    console.log('this.prtw', this.addDevisEssai.value.prtw);

    this.addDevisEssai.get('prmt').setValue(this.addDevisEssai.value.prtp  * this.addDevisEssai.value.prtw );
    console.log(this.addDevisEssai.value.prmt + ' :prmt');
  }
  calcul29(): void {
    console.log('this.wos', this.addDevisEssai.value.wos );
    console.log('this.won', this.addDevisEssai.value.won);

    this.addDevisEssai.get('wop').setValue(this.addDevisEssai.value.wos   + this.addDevisEssai.value.won );
    console.log(this.addDevisEssai.value.wop + ' :wop');
  }
  calcul30(): void {
    console.log('this.wop', this.addDevisEssai.value.wop);
    console.log('this.woz', this.addDevisEssai.value.woz);

    this.addDevisEssai.get('woa').setValue(this.addDevisEssai.value.wop   * this.addDevisEssai.value.woz );
    console.log(this.addDevisEssai.value.woa + ' :woa');
  }
  calcul31(): void {
    console.log('this.wof ', this.addDevisEssai.value.wof );
    console.log('this.wor', this.addDevisEssai.value.wor);

    this.addDevisEssai.get('wob').setValue(this.addDevisEssai.value.wof  + this.addDevisEssai.value.wor );
    console.log(this.addDevisEssai.value.wob + ' :wob');
  }
  calcul32(): void {
    console.log('this.wob', this.addDevisEssai.value.wob);
    console.log('this.wow', this.addDevisEssai.value.wow);

    this.addDevisEssai.get('woj').setValue(this.addDevisEssai.value.wob  * this.addDevisEssai.value.wow );
    console.log(this.addDevisEssai.value.woj + ' :woj');
  }
  calcul33(): void {
    console.log('this.aye ', this.addDevisEssai.value.aye );
    console.log('this.ayo', this.addDevisEssai.value.ayo);

    this.addDevisEssai.get('ayw').setValue(this.addDevisEssai.value.aye   + this.addDevisEssai.value.ayo );
    console.log(this.addDevisEssai.value.ayw + ' :ayw');
  }
  calcul34(): void {
    console.log('this.ayw  ', this.addDevisEssai.value.ayw  );
    console.log('this.ayx', this.addDevisEssai.value.ayx);

    this.addDevisEssai.get('ayha').setValue(this.addDevisEssai.value.ayw  * this.addDevisEssai.value.ayx );
    console.log(this.addDevisEssai.value.ayha + ' :ayha');
  }
  calcul35(): void {
    console.log('this.ayt   ', this.addDevisEssai.value.ayt   );
    console.log('this.ayq', this.addDevisEssai.value.ayq);

    this.addDevisEssai.get('ayg').setValue(this.addDevisEssai.value.ayt   + this.addDevisEssai.value.ayq );
    console.log(this.addDevisEssai.value.ayg + ' :ayg');
  }
  calcul36(): void {
    console.log('this.ayg ', this.addDevisEssai.value.ayg );
    console.log('this.aym', this.addDevisEssai.value.aym);

    this.addDevisEssai.get('ayv').setValue(this.addDevisEssai.value.ayg    * this.addDevisEssai.value.aym );
    console.log(this.addDevisEssai.value.ayv + ' :ayv');
  }
  calcul37(): void {
    console.log('this.inr', this.addDevisEssai.value.inr);
    console.log('this.ino', this.addDevisEssai.value.ino);

    this.addDevisEssai.get('ins').setValue(this.addDevisEssai.value.inr + this.addDevisEssai.value.ino );
    console.log(this.addDevisEssai.value.ins + ' :ins');
  }
  calcul38(): void {
    console.log('this.ins ', this.addDevisEssai.value.ins );
    console.log('this.ind', this.addDevisEssai.value.ind);

    this.addDevisEssai.get('inf').setValue(this.addDevisEssai.value.ins  * this.addDevisEssai.value.ind );
    console.log(this.addDevisEssai.value.inf + ' :inf');
  }
  calcul39(): void {
    console.log('this.iny', this.addDevisEssai.value.iny  );
    console.log('this.inq', this.addDevisEssai.value.inq);

    this.addDevisEssai.get('ing').setValue(this.addDevisEssai.value.iny  + this.addDevisEssai.value.inq );
    console.log(this.addDevisEssai.value.ing + ' :ing');
  }
  calcul40(): void {
    console.log('this.ing ', this.addDevisEssai.value.ing );
    console.log('this.inh', this.addDevisEssai.value.inh);

    this.addDevisEssai.get('ink').setValue(this.addDevisEssai.value.ing   * this.addDevisEssai.value.inh );
    console.log(this.addDevisEssai.value.ink + ' :ink');
  }

  getallclient() {
    this.servclient.all().subscribe(result => {


      this.listclient = result ;

      console.log('listClient', this.listclient);

    });
  }

  public onChangeSelectedClient(event) {
    this.selectclient = event.target.value;
    console.log('selectclient', this.selectclient);

    this.servclient.getbyId(this.selectclient).subscribe(rep => {
      this.listclient = rep ;
      console.log('listclient', rep);
    });
  }
}
