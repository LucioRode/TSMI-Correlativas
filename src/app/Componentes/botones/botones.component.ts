import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  info(): void {
    this.router.navigate(['/info'])
  }

  materias(): void {
    this.router.navigate(['/materias'])
  }
  
  estado(): void {
    this.router.navigate(['/estado'])
  }

}
