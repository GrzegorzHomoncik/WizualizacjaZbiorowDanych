import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  type = 'BubbleChart';
  @Input() data = [];
  columnNames = ['File name', 'x', 'y'];
  options = {
    fontSize: 0,
    sizeAxis: {minSize: 4, maxSize: 4},
    bubble: {
      textStyle: {
        color: 'none',
        fontSize: 1,
        fontName: 'Times-Roman',
        bold: false,
        italic: true
      }
    },
    backgroundColor: {fill: 'transparent'},
  };

}
