import {Component} from '@angular/core';
import {Model} from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  resp: Model[];
  chartData: [[string, number, number]] = [['', 0, 0]];

  onCompleteItem($event) {
    this.resp = $event.response;
    let x;
    let y;
    let label;
    this.chartData = [['', 0, 0]];
    this.chartData.pop();
    for (const record of this.resp) {
      x = record.position[0];
      y = record.position[1];
      label = record.file_name;
      this.chartData.push([
        label,
        x,
        y,
      ]);
    }
  }

}
