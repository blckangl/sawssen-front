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
listoffrebyDevis;
show = false;
idDevis;
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



    this.servprojet.getProjetByClient(this.selectclient).subscribe(res => {
      this.listprojet = res ;
      console.log('listprojet', res);
    });




  }




  public onChangeSelectedDevis(event) {
    this.selectdevis = event.target.value;
    console.log('selectdevis', this.selectdevis);



    this.state = true;
    this.servOffre.getoffreByDevis(this.selectdevis).subscribe(resultat => {


      this.listoffrebyDevis = resultat ;
      this.idDevis = this.listoffrebyDevis['0'].devis.id ;
      console.log('idDevis', this.idDevis);

      console.log('listoffrebyDevis', this.listoffrebyDevis);


    });



  }






  public onChangeSelectedProjet(event) {
    this.selectprojet = event.target.value;
    console.log('selectprojet', this.selectprojet);

    this.servdevis.getDevisbyProjet(this.selectprojet).subscribe(rep => {
      this.listdevis = rep ;
      console.log('listdevis', rep);
    });
  }






}
