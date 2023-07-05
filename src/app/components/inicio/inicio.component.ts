import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  irAD() {
    window.open(environment.urlAD ,'_blank');
  }
  irEOS() {
    window.open(environment.urlEOS ,'_blank');
  }

}
