import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoute-client',
  templateUrl: './ajoute-client.component.html',
  styleUrls: ['./ajoute-client.component.scss']
})
export class AjouteClientComponent implements OnInit {
const x = 0;
  constructor() { }

  ngOnInit() {
    console.log('ok');
    console.log(this.x);
  }

}
