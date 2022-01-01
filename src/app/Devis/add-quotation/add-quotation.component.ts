import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ProjetService} from '../../services/projet.service';
import {DevisService} from '../../services/devis.service';


@Component({
  selector: 'app-add-quotation',
  templateUrl: './add-quotation.component.html',
  styleUrls: ['./add-quotation.component.scss']
})
export class AddQuotationComponent implements OnInit {
  listclient;
  listprojet;
  listdevis;
  projet;
  state: boolean;
  aux;
  id;
  client;
  selectclient;
  selectprojet;
  selectdevis;
  listdevisbyProjet;
  show = false;
  idProjet;
  idClient;
  idDevis;
  constructor(private  servclient: ClientService, private  servprojet: ProjetService , private  servdevis: DevisService ) { }

  ngOnInit() {

    this.getallclient();
    this.getallProjet();
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



    this.servprojet.getbyclient(this.selectclient).subscribe(res => {
      this.listprojet = res ;
      console.log('listprojet', res);
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
