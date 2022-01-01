import { Component, OnInit } from '@angular/core';
import {FamilyService} from '../../services/family.service';
import {MaterialService} from '../../services/material.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-matiere',
  templateUrl: './detail-matiere.component.html',
  styleUrls: ['./detail-matiere.component.scss']
})
export class DetailMatiereComponent implements OnInit {
  idmaterial; detailsmaterial;
  constructor(private ServiceFamily: FamilyService, private ServiceMat: MaterialService , private formBuilder: FormBuilder,
              private actvroute: ActivatedRoute) {
    this.idmaterial = this.actvroute.params['value']['idmaterial'];

    this.ServiceMat.getbyId(this.idmaterial).subscribe(result => {
      this.detailsmaterial = result;
      console.log('detailsmaterial', this.detailsmaterial);
    });
  }

  ngOnInit() {
  }

}
