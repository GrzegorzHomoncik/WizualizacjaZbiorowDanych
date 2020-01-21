import {Component, Input, OnChanges} from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';


@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html'
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
      legend: {
        enabled: false
      },
      series: [{
        data: this.chartData
      }]
    };
    highcharts3D(Highcharts);
  }

  /*

  (function (H) {
      function dragStart(eStart) {
        eStart = chart.pointer.normalize(eStart);

        var posX = eStart.chartX,
          posY = eStart.chartY,
          alpha = chart.options.chart.options3d.alpha,
          beta = chart.options.chart.options3d.beta,
          sensitivity = 5,  // lower is more sensitive
          handlers = [];

        function drag(e) {
          // Get e.chartX and e.chartY
          e = chart.pointer.normalize(e);

          chart.update({
            chart: {
              options3d: {
                alpha: alpha + (e.chartY - posY) / sensitivity,
                beta: beta + (posX - e.chartX) / sensitivity
              }
            }
          }, undefined, undefined, false);
        }

        function unbindAll() {
          handlers.forEach(function (unbind) {
            if (unbind) {
              unbind();
            }
          });
          handlers.length = 0;
        }

        handlers.push(H.addEvent(document, 'mousemove', drag));
        handlers.push(H.addEvent(document, 'touchmove', drag));


        handlers.push(H.addEvent(document, 'mouseup', unbindAll));
        handlers.push(H.addEvent(document, 'touchend', unbindAll));
      }
      H.addEvent(chart.container, 'mousedown', dragStart);
      H.addEvent(chart.container, 'touchstart', dragStart);
    }(Highcharts));
  */

}


