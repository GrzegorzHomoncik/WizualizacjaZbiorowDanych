import {Component, Input, OnInit} from '@angular/core';
import {Response} from '../model/response';
import {ChartModel} from '../model/chartModel';

@Component({
  selector: 'app-two-dim-chart',
  templateUrl: './two-dim-chart.component.html',
  styleUrls: ['./two-dim-chart.component.css']
})
export class TwoDimChartComponent implements OnInit {

  type = 'BubbleChart';
  @Input() dataPackage: Response;
  dataIsomap: (string | number)[][];
  dataLocallyLinearEmbedding: (string | number)[][];
  dataMDS: (string | number)[][];
  dataTSNE: (string | number)[][];
  dataSpectralEmbedding: (string | number)[][];
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
    this.dataIsomap = this.insertDataIntoChartFormat(this.dataPackage.isomap);
    this.dataLocallyLinearEmbedding = this.insertDataIntoChartFormat(this.dataPackage.locallyLinearEmbedding);
    this.dataMDS = this.insertDataIntoChartFormat(this.dataPackage.MDS);
    this.dataTSNE = this.insertDataIntoChartFormat(this.dataPackage.TSNE);
    this.dataSpectralEmbedding = this.insertDataIntoChartFormat(this.dataPackage.spectralEmbedding);
  }

  insertDataIntoChartFormat(inputData: ChartModel[]) {
    const data = [['', 0, 0]];
    data.pop();
    for (const record of inputData) {
      data.push([
        record.label,
        record.x,
        record.y,
        record.color
      ]);
    }
    return data;
  }
}
