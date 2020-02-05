import {Component, HostListener, Input, OnChanges} from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';


@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html'
})
export class HighchartComponent implements OnChanges {

  @Input() chartData: {}[];
  @Input() title: string;
  mouseClicked = false;
  previousX: number;
  previousY: number;

  chartOptions: any;
  highcharts = Highcharts;
  private alpha = 10;
  private beta = 30;

  ngOnChanges() {
    this.chartOptions = {
      chart: {
        type: 'scatter',
        backgroundColor: 'transparent',
        options3d: {
          enabled: true,
          alpha: this.alpha,
          beta: this.beta,
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
      legend: {
        enabled: false
      },
      series: [{
        data: this.chartData
      }]
    };
    highcharts3D(Highcharts);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    if (this.mouseClicked) {
      this.alpha -= (this.previousY - e.clientY) * 0.2;
      this.beta += (this.previousX - e.clientX) * 0.2;
      this.ngOnChanges();
    }
    this.previousX = e.clientX;
    this.previousY = e.clientY;
  }


}


