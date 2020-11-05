import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent {

  constructor() { }

  @Input() client: Client;

  test(){
    console.log(this.client.name);
  }
  
}
