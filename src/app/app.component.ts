import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { FileQueueObject } from './file-uploader.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {

      data: [
        { x: -1, y: -1 },
        { x: -4, y: 3 },
        { x: 3, y: -4 },
        { x: 4, y: 4 },
        { x: 1, y: 2 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() { }

  ngOnInit() {
  }

  onCompleteItem($event) {
    console.log($event.response);
  }
}
