import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DevisService} from '../../services/devis.service';
import {FormBuilder} from '@angular/forms';
import {ExquiseService} from '../../services/exquise.service';

@Component({
  selector: 'app-all-exquise',
  templateUrl: './all-exquise.component.html',
  styleUrls: ['./all-exquise.component.scss']
})
export class AllExquiseComponent implements OnInit {
  listExquise;
  exquise ;
  idExquise;
  ExquiseDetails;

  constructor(private actvroute: ActivatedRoute, private ServiceExquise: ExquiseService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getallExquise();
  }
  getallExquise() {
    this.ServiceExquise.all().subscribe(result => {

      this.listExquise = result ;

      console.log('listExquise', this.listExquise);

    });
  }
}
