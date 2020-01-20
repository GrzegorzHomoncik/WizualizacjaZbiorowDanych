import {Component, Input, OnInit} from '@angular/core';
import {Response} from '../model/response';

@Component({
  selector: 'app-two-dim-chart',
  templateUrl: './two-dim-chart.component.html'
})
export class TwoDimChartComponent implements OnInit {

  type = 'BubbleChart';
  @Input() dataPackage: Response;

  ngOnInit(): void {
  }

}
