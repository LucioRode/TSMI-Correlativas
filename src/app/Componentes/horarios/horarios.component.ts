import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  hp: boolean;
  hs: boolean;
  ht: boolean;


  constructor() {
    this.hp = false;
    this.hs = false;
    this.ht = false;
   }

  ngOnInit(): void {
    this.horarioPrimero();
  }

  horarioPrimero(): void {
    this.hp = true;
    this.hs = false;
    this.ht = false;
  }

  horarioSegundo(): void {
    this.hp = false;
    this.hs = true;
    this.ht = false;
  }

  horarioTercero(): void {
    this.hp = false;
    this.hs = false;
    this.ht = true;
  }

}
