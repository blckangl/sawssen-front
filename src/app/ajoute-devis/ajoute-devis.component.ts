import { Component, OnInit } from '@angular/core';
import {DevisService} from '../services/devis.service';
import {ActivatedRoute} from '@angular/router';
import {MaterieService} from '../services/materie.service';
import {FamilleService} from '../services/famille.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajoute-devis',
  templateUrl: './ajoute-devis.component.html',
  styleUrls: ['./ajoute-devis.component.scss']
})
export class AjouteDevisComponent implements OnInit {
  idDevis;
  DevisDetails;
  listfamily;
  listmaterial;
  selectfamily;
  selectmaterial;
materialDetail;
  addForm: FormGroup;
  submitted;

  constructor(private actvroute: ActivatedRoute, private service: DevisService,private  formBuilder: FormBuilder, private servicemat: MaterieService, private familySer: FamilleService) {
    this.idDevis = this.actvroute.params['value']['idDevis'];


    this.service.getbyId(this.idDevis).subscribe(result => {
      this.DevisDetails = result;
      console.log('DevisDetails', this.DevisDetails);
      // this.name = this.application.piecejointe;
      // this.xpath = this.path + this.name;
      // console.log('path', this.xpath);
    });
  }


  ngOnInit() {
    this.getfamilly();


    this.addForm = this.formBuilder.group({
      nomMatiere: ['', Validators.required],
      salle: ['']


    });


  }



  get f() {
    return this.addForm.controls;
  }

  getfamilly() {


    this.familySer.all().subscribe(result => {

      this.listfamily = result;

      console.log('listfamily', this.listfamily);
    });
  }

  /*

    getmaterialByFamilly(idF) {


      this.servicemat.allbyFamil(idF).subscribe(result => {

        this.listmaterial = result;

        console.log('listmaterial', this.listmaterial);
      });
    }
  */


  public onChangeSelectedFamily(event) {
    this.selectfamily = event.target.value;
    console.log('selectfamily', this.selectfamily);


    this.servicemat.allbyFamil(this.selectfamily).subscribe(result => {

      this.listmaterial = result;

      console.log('listmaterial', this.listmaterial);
    });


  }


  public onChangeSelected(event) {
    this.selectmaterial = event.target.value;
    console.log('selectmaterial', this.selectmaterial);


    this.servicemat.getById(this.selectmaterial).subscribe(result => {

      this.materialDetail = result;

      console.log('materialDetail', this.materialDetail);
    });


  }
}
