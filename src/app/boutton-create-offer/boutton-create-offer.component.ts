import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';
import {ProjetService} from '../services/projet.service';
import {DevisService} from '../services/devis.service';
import {OffreService} from '../services/offre.service';

@Component({
  selector: 'app-boutton-create-offer',
  templateUrl: './boutton-create-offer.component.html',
  styleUrls: ['./boutton-create-offer.component.scss']
})
export class BouttonCreateOfferComponent implements OnInit {
  listclient;
  listprojet;
  listdevis;
  listoffre;
  projet;
  devis;
  state: boolean;
aux;
  id;
  client;
  selectclient;
  selectprojet;
  selectdevis;
listoffrebyClient;
show = false;
  constructor(private  servclient: ClientService, private  servprojet: ProjetService , private  servdevis: DevisService , private servOffre: OffreService) { }



  ngOnInit() {

    this.getallclient();
    this.getallDevis();
    this.getallProjet();
  // this.onChangeSelectedClient(this.selectclient);
  }


  getallclient() {
    this.servclient.all().subscribe(result => {


      this.listclient = result ;

      console.log('listClient', this.listclient);

    });
  }


  getallDevis() {

    this.servdevis.all().subscribe(res => {


      this.listdevis = res ;

      console.log('listdevis', this.listdevis);


    });
  }









  getallProjet() {

    this.servprojet.all().subscribe(rep => {


      this.listprojet = rep ;
      console.log('listprojet', this.listprojet);


    });
  }




  getbyId(id) {


    this.servdevis.getbyId(this.id).subscribe(res1 => {


      this.aux = res1 ;
      console.log('aux', this.aux);

    });
  }





  public onChangeSelectedClient(event) {
    this.show = true;
    console.log('show', this.show);
    this.selectclient = event.target.value;
    console.log('selectclient', this.selectclient);

    this.state = true;
    this.servOffre.getoffreByClient(this.selectclient).subscribe(resultat => {


      this.listoffrebyClient = resultat ;

      console.log('listoffrebyClient', this.listoffrebyClient);


    });

  }




  public onChangeSelectedDevis(event) {
    this.selectdevis = event.target.value;
    console.log('selectdevis', this.selectdevis);
  }






  public onChangeSelectedProjet(event) {
    this.selectprojet = event.target.value;
    console.log('selectprojet', this.selectprojet);
  }







}
