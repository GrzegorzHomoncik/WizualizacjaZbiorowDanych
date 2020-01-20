import {Component, Input, OnChanges} from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-highchart-two-dim',
  templateUrl: './highchart-two-dim.component.html'
})
export class HighchartTwoDimComponent implements OnChanges {
  @Input() chartData: any;
  @Input() title: string;

  Highcharts = Highcharts;
  public options: any = {
    chart: {
      type: 'scatter',
      backgroundColor: 'transparent',
      plotBackgroundColor: 'transparent',
      height: 700
    },
    title: {
      text: this.title
    },
    credits: {
      enabled: false
    },
    tooltip: {},
    series: [{
      type: 'scatter',
      data: this.chartData
    }]
  };

  constructor() {
  }

  ngOnChanges(): void {

    this.chartData.forEach(x => x.z = 2);

    this.options = {
      chart: {
        type: 'scatter',
        backgroundColor: 'transparent',
        height: 700
      },
      title: {
        text: this.title
      },
      credits: {
        enabled: false
      },
      tooltip: {
        useHTML: true,
        headerFormat: '<p>',
        pointFormat: '{point.label}',
        footerFormat: '</p>',
        followPointer: true
      },
      legend: {
        enabled: false
      },
      series: [{
        type: 'scatter',
        data: this.chartData
      }]
    };
  }

}
