import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-dim-chart',
  templateUrl: './two-dim-chart.component.html',
  styleUrls: ['./two-dim-chart.component.css']
})
export class TwoDimChartComponent implements OnInit {

  type = 'BubbleChart';
  @Input() inputData = [];
  data = [];
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
    colors: ['red', 'yellow', 'green', 'blue'],
    height: 600,
    width: 800,
    backgroundColor: {fill: 'transparent'},
  };

  ngOnInit(): void {
    let x;
    let y;
    let label;
    let color;
    this.data = [['', 0, 0]];
    this.data.pop();
    for (const record of this.inputData) {
      x = record.position[0];
      y = record.position[1];
      label = record.file_name;
      color = record.color;
      this.data.push([
        label,
        x,
        y,
        color
      ]);
    }
  }


}
