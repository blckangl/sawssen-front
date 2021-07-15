import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';
import {DevisService} from '../services/devis.service';
import {ProjetService} from '../services/projet.service';

@Component({
  selector: 'app-ajoute-offre',
  templateUrl: './ajoute-offre.component.html',
  styleUrls: ['./ajoute-offre.component.scss']
})
export class AjouteOffreComponent implements OnInit {
listclient;
listdevis;
listoffre;
listprojet;
selectclient;
selectdevis;
selectoffre;
selectprojet;
  constructor(private serclient: ClientService , private serdevis: DevisService , private  servprojet: ProjetService) { }

  ngOnInit() {
    this.getprojet();
    this.getclient();
    this.getDevis();
  }

  public onChangeClient(event) {
    this.selectclient = event.target.value;

    console.log('selectclient', this.selectclient);
  }


  public onChangeDevis(event) {
    this.selectdevis = event.target.value;

    console.log('selectdevis', this.selectdevis);
  }


  public onChangePrjet(event) {
    this.selectprojet = event.target.value;

    console.log('selectprojet', this.selectprojet);
  }


getclient() {


     this.serclient.all().subscribe(result => {
      this.listclient = result ;
      console.log('listclient', result);
    });
}

  getprojet() {


    this.servprojet.all().subscribe(res => {
      this.listprojet = res ;
      console.log('listprojet', res);
    });
  }

  getDevis() {


    this.serdevis.all().subscribe(rep => {
      this.listdevis = rep ;
      console.log('listdevis', rep);
    });
  }



}
