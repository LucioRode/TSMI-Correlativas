import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})


export class PieComponent implements OnInit {
  
  validar: boolean;

  constructor() {
    this.validar = false;
  }

  ngOnInit(): void {
    }

  activar(): void {
    if(this.validar === false) {
      this.validar = true;
      location.hash = "#fin";
    } else {
      this.validar = false;
    }

    location.hash = "#fin";
  }
}