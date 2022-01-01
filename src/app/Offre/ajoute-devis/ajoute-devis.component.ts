
import { Component, OnInit } from '@angular/core';
import {DevisService} from '../../services/devis.service';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FamilyService} from '../../services/family.service';
import {MaterialService} from '../../services/material.service';
import {OffreService} from '../../services/offre.service';

@Component({
  selector: 'app-ajoute-devis',
  templateUrl: './ajoute-devis.component.html',
  styleUrls: ['./ajoute-devis.component.scss']
})
export class AjouteDevisComponent implements OnInit {
  idOffre;
  DevisDetails;
  listfamily;
  listmaterial;
  selectfamily;
  selectmaterial;
  materialDetail;
  addOffer: FormGroup;
  submitted = false;

  constructor(private actvroute: ActivatedRoute, private service: DevisService, private formBuilder: FormBuilder,
              private familySer: FamilyService, private ServiceMat: MaterialService, private servOffre: OffreService) {
    this.idOffre = this.actvroute.params['value']['idOffre'];


    this.service.getbyId(this.idOffre).subscribe(result => {
      this.DevisDetails = result;
      console.log('DevisDetails', this.DevisDetails);
      // this.name = this.application.piecejointe;
      // this.xpath = this.path + this.name;
      console.log('path', this.DevisDetails.MiniPro);
    });

  }


  ngOnInit() {
    this.getfamilly();
    this.addOffer = this.formBuilder.group({
      date: ['', Validators.required],
      numdevis: ['', Validators.required],
      numdoc: ['', Validators.required],
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
      photo: ['', Validators.required],
      partNam: ['', Validators.required],
      partNum: ['', Validators.required],
      lenghtP: ['', Validators.required],
      weidthP: ['', Validators.required],
      hauteurP: ['', Validators.required],
      partSur: ['', Validators.required],
      materialFa: this.selectfamily,
      materialDe: this.selectmaterial,
      supplier: ['', Validators.required],
      incotermS: ['', Validators.required],
      sales: ['', Validators.required],
      partN: ['', Validators.required],
      transport: ['', Validators.required],
      delivered: ['', Validators.required],
      handling: ['', Validators.required],
      volum: ['', Validators.required],
      density: ['', Validators.required],
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
      pourcentageMa: ['', Validators.required],
      materialW: ['', Validators.required],
      batch: ['', Validators.required],
      annualPur: ['', Validators.required],
      netto: ['', Validators.required],
      rate: ['', Validators.required],
      pourcentageNe: ['', Validators.required],
      parts: ['', Validators.required],
      pressure: ['', Validators.required],
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
      dbox: ['', Validators.required],
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
    });
  }


  get f() {
   return this.addOffer.controls;
  }

  onSubmit() {
    this.submitted = true;

    /*this.servOffre.add(this.addOffer.value,this.idC,this.idP,this.idD).subscribe(res=>{

     console.log("resultoffre});*/

    console.log('addform', this.addOffer.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addOffer.value, null, 4));

  }
onReset() {
    this.submitted = false;
    this.addOffer.reset();
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
    console.log('selectmaterialchoisi', this.selectmaterial);


  }

  }

