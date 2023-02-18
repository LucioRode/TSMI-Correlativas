import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SCorrelativasService } from 'src/app/Services/servCorrelativas.service';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit {


  constructor(private _servCorrelativas : SCorrelativasService,
              private router : Router) { }

  ngOnInit(): void {
  }
  
  sumar(): void {
    
  }
}
