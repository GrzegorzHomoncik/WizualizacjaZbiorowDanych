import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {FileQueueObject} from './file-uploader.service';
import {AngularWaitBarrier} from 'blocking-proxy/built/lib/angular_wait_barrier';
import * as angular from 'angular';
import {Model} from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  resp: Model[];
  data2: any = [['meh', 8, 12]];

  onCompleteItem($event) {
    this.resp = $event.response;
    let x;
    let y;
    let label;
    const dataBuffer = [];
    while (this.data2.length > 0) {
      this.data2.pop();
    }
    for (const record of this.resp) {
      x = record.position[0];
      y = record.position[1];
      label = record.file_name;
      dataBuffer.push([
        label,
        x,
        y,
      ]);

    }
    this.data2 = dataBuffer;

  }
}
