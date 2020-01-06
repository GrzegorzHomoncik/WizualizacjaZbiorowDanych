import {Component, Input} from '@angular/core';

let input = Input;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  bubbleOpt = {textStyle: {color: 'black', fontName: 'Arial', fontSize: '1'}};
  type = 'BubbleChart';
  @Input() data = [
    ['meh', 8, 12],
    ['s', 4, 5.5],
    ['a', 11, 14],
    ['b', 3, 3.5],
    ['c', 6.5, 7]
  ];
  columnNames = ['File name', 'x', 'y'];
  options = {
    fontSize: 0,
    sizeAxis: {minSize: 4, maxSize: 4},
    bubble: {
      textStyle: {
        fontSize: 1,
        fontName: 'Times-Roman',
        bold: false,
        italic: true
      }
    },
    backgroundColor: {fill: 'transparent'},
  };

}
