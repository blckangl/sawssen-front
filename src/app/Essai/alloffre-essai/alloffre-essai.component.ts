import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alloffre-essai',
  templateUrl: './alloffre-essai.component.html',
  styleUrls: ['./alloffre-essai.component.scss']
})
export class AlloffreEssaiComponent implements OnInit {
  currentDate = new Date().toLocaleDateString();
  constructor() { }

  ngOnInit() {
  }

}
