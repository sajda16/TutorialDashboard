import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  numero: number;
  resultado: number;
  constructor() { }

  ngOnInit() {
    console.log('Inicio el componente');
  }
  Duplicar() {
    console.log('voy a duplicar');
    this.resultado = this.numero * 2;
    console.log(this.resultado);
  }

}
