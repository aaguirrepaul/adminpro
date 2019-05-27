import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  
  graficos: any = {
    'grafico1': {
      'labels': ['Con frijoles', 'Con natilla', 'Con tocino'],
      'data': [24,30,46],
      'type': 'doughnut',
      'leyenda': 'el pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data': [4600,6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },

    'grafico3': {
      'labels': ['River', 'Boca', 'Racing'],
      'data': [2400,2000,1600],
      'type': 'doughnut',
      'leyenda': 'Cantidad de hinchas'
    }
    }


  

  constructor() { }

  ngOnInit() {
  }

}
