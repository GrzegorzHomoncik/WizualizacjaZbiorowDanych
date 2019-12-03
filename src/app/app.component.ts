import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { FileQueueObject } from './file-uploader.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import * as angular from "angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  resp : any = [];
  data2 : any = [];
  
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
      label: 'Test',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() { }

  ngOnInit() {
  }

  onCompleteItem($event) {
    this.resp = $event.response;
    var x;
    var y;
    for(var i = 0; i < this.resp.length;++i){
      x = this.resp[i][0];
      y = this.resp[i][1];
     this.data2.push({
       'x':x,
       'y':y,
     });
     
    }
    console.log(this.data2);
    this.scatterChartData = [
      {
  
        data: this.data2,
        label: 'korpus 1',
        pointRadius: 10,
      },
    ];
  }
}
