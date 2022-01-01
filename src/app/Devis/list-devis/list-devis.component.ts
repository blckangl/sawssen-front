import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FamilyService} from '../../services/family.service';
import {MaterialService} from '../../services/material.service';
import {FormBuilder} from '@angular/forms';
import {DevisService} from '../../services/devis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss']
})
export class ListDevisComponent implements OnInit {
  listDevis;
  devis ;
  idDevis;
  DevisDetails;
  project: any;
  constructor(private actvroute: ActivatedRoute, private ServiceDevis: DevisService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getallDevis();
  }
  getallDevis() {
    this.ServiceDevis.all().subscribe(result => {

      this.listDevis = result ;

      console.log('listDevis', this.listDevis);

    });
  }

  supprimer(idDevis) {
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
        this.ServiceDevis.delete(idDevis).subscribe(res => {
          console.log(res);
          this.getallDevis();
        });
        Swal.fire(
          'Deleted!',
          'Your UC-BOX has been deleted.',
          'success',
        );
      }
    });
  }

  Search() {
    if ( this.project === '') {
      this.ngOnInit();
    } else {
      this.listDevis = this.listDevis.filter(res => {
        return res.project.toLocaleLowerCase().match(this.project.toLocaleLowerCase());
      });
    }
  }
}
