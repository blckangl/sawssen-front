import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DevisEssaiService} from '../../services/devis-essai.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-devis-essai',
  templateUrl: './edit-devis-essai.component.html',
  styleUrls: ['./edit-devis-essai.component.scss']
})
export class EditDevisEssaiComponent implements OnInit {
  selectdevisEssai;
  listDevEssai;
  idDevisEssai;
  DetailsEssai;
  currentDate = new Date().toLocaleDateString();
  addDevisEssai: FormGroup;
  submitted = false;
  constructor(private actvroute: ActivatedRoute, private SerDevEss: DevisEssaiService, private formBuilder: FormBuilder ,
              private router: Router ) {

    this.idDevisEssai = this.actvroute.params['value']['idDevisEssai'];

    this.SerDevEss.getbyId(this.idDevisEssai).subscribe(result => {
      this.DetailsEssai = result;
      console.log('DetailsEssai', this.DetailsEssai);
    });
  }

  ngOnInit() {
    this.getallDevisEssai();
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
  getallDevisEssai() {
    this.SerDevEss.getall().subscribe(result => {

      this.listDevEssai = result ;

      console.log('listDevEssai', this.listDevEssai);

    });
  }

  edit() {
    this.SerDevEss.modifier(this.idDevisEssai, this.addDevisEssai.value).subscribe(res => {
      console.log(res);
      this.getallDevisEssai();
      this.router.navigate(['/allDevEss']);
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

}
