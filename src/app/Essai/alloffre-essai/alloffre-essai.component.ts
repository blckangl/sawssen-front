import {Component, OnInit} from '@angular/core';
import {OffreService} from '../../services/offre.service';
import {OffreEssaiService} from '../../services/offre-essai.service';
import {ReclamationService} from '../../services/reclamation.service';

@Component({
  selector: 'app-alloffre-essai',
  templateUrl: './alloffre-essai.component.html',
  styleUrls: ['./alloffre-essai.component.scss']
})
export class AlloffreEssaiComponent implements OnInit {
  currentDate: Date = new Date();
  public offres: any;
  public reclamation: Reclamation = {date: new Date(), sujet: '', description: ''};

  recSujet: string;
  recContent: string;

  constructor(private offreService: OffreEssaiService, private reclamationService: ReclamationService) {
  }

  ngOnInit() {
    this.getAlloffs();
  }

  private addReclamation(recSujet: HTMLInputElement, recdesc: HTMLTextAreaElement, dest: HTMLInputElement) {
    this.reclamation.date = new Date();
    this.reclamation.sujet = recSujet.value;
    this.reclamation.description = recdesc.value;
    this.reclamationService.add(this.reclamation, dest.value);
  }

  private getAlloffs() {
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

  changeStatus(id: any, status: number) {
    this.offreService.changeStatus(id, status).subscribe(() => {
      this.getAlloffs();
    }, (error => console.log(error)));
  }

}
