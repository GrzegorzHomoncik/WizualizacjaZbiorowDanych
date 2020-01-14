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
        marginBottom: 100,
        marginRight: 50,
        backgroundColor: 'transparent',
        options3d: {
          enabled: true,
          alpha: 10,
          beta: 30,
          depth: 250,
          viewDistance: 5,
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
      xAxis: {
        min: -1,
        max: 1
      },
      yAxis: {
        min: -1,
        max: 1
      },
      zAxis: {
        min: -1,
        max: 1
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


