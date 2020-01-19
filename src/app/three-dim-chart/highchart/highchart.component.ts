import {Component, Input, OnChanges} from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';


@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnChanges {

  @Input() chartData: {}[];
  @Input() title: string;

  chartOptions: any;
  highcharts = Highcharts;

  ngOnChanges() {
    this.chartOptions = {
      chart: {
        type: 'scatter',
        backgroundColor: 'transparent',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 30,
          depth: 250,
          viewDistance: 3,
          frame: {
            bottom: {
              size: 1,
              color: 'rgba(0, 0, 0, 0.02)'
            },
            back: {
              size: 1,
              color: 'rgba(0, 0, 0, 0.04)'
            },
            side: {
              size: 1,
              color: 'rgba(0, 0, 0, 0.06)'
            }
          }
        }
      },
      title: {
        text: this.title
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<p>',
        pointFormat: '{point.label}',
        footerFormat: '</p>',
        followPointer: true
      },
      series: [{
        data: this.chartData
      }]
    };
    highcharts3D(Highcharts);
  }
}


