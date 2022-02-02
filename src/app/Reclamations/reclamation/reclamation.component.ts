import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ReclamationService} from '../../services/reclamation.service';
import {AuthentificationService} from '../../services/authentification.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {
  listerec;
  idrec;
  p = 1;
  recievedReclamation:Array<any>;

  constructor(private srvcrec: ReclamationService, private authService: AuthentificationService) {
  }

  ngOnInit() {
    this.getallreclamation();
    this.authService.getprofile().subscribe(profile => {
      console.log('profile ', profile);
      this.recievedReclamation = profile.recievedReclamation;
      console.log("recieved",this.recievedReclamation);
    });
  }

  getallreclamation() {
    this.srvcrec.getall().subscribe(result => {

      this.listerec = result;

      console.log(' listerec', this.listerec);

    });
  }

  supprimer(idrec) {
    Swal.fire({
      position: 'center',
      title: 'Are you sure?',
      html: 'You wont it be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      width: 500,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.srvcrec.delete(idrec).subscribe(res => {
          console.log(res);
          this.getallreclamation();
        });
        Swal.fire(
          'Deleted!',
          'Your Reclamation has been deleted.',
          'success',
        );
      }
    });
  }
}
