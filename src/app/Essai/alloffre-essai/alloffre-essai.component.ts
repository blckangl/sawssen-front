import {Component, OnInit} from '@angular/core';
import {OffreService} from '../../services/offre.service';
import {OffreEssaiService} from '../../services/offre-essai.service';

@Component({
  selector: 'app-alloffre-essai',
  templateUrl: './alloffre-essai.component.html',
  styleUrls: ['./alloffre-essai.component.scss']
})
export class AlloffreEssaiComponent implements OnInit {
  currentDate = new Date().toLocaleDateString();
  public offres: any;

  constructor(private offreService: OffreEssaiService) {
  }

  ngOnInit() {
    this.offreService.getall().subscribe(res => {
      console.log('all offre', res);
      this.offres = res.map(x => {
        return {
          id: x.id,
          customer: x.client,
          quote: x.numdoc,
          project: x.proj,
          mold: x.mold,
          reference: x.ref,
          cost: x.cosd,
          date: x.date,
          status: x.status
        };

      });

      console.log(this.offres);
    }, error => {
      console.log('err ', error);
    });
  }

  getStatus(status: number | string): string {
    switch (status.toString()) {
      case '0':
        return 'PROVISIONAL';
        break;
      case '1':
        return 'SIGNED';
        break;
      case '2':
        return 'REFUSED';
        break;
      case '3':
        return 'FINALIZED';
        break;

      default:
        return '';
    }
  }
}
