import {Component, Input, OnInit} from '@angular/core';
import {Response} from '../model/response';

@Component({
  selector: 'app-three-dim-chart',
  templateUrl: './three-dim-chart.component.html',
  styleUrls: ['./three-dim-chart.component.css']
})
export class ThreeDimChartComponent implements OnInit {
  @Input() dataPackage: Response;

  constructor() {
  }

  ngOnInit() {
  }

}
