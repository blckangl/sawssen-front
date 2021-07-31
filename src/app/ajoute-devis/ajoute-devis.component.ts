import { Component, OnInit } from '@angular/core';
import {DevisService} from '../services/devis.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ajoute-devis',
  templateUrl: './ajoute-devis.component.html',
  styleUrls: ['./ajoute-devis.component.scss']
})
export class AjouteDevisComponent implements OnInit {
idDevis;
DevisDetails;
  constructor(private actvroute: ActivatedRoute, private service: DevisService) {
    this.idDevis = this.actvroute.params['value']['idDevis'];
    this.service.getbyId(this.idDevis).subscribe(result => {
      this.DevisDetails = result;
      console.log('DevisDetails', this.DevisDetails);
      //this.name = this.application.piecejointe;
     // this.xpath = this.path + this.name;
     // console.log('path', this.xpath);
    });
  }


  ngOnInit() {
  }

}
