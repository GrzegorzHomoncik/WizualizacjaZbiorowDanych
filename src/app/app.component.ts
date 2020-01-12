import {Component} from '@angular/core';
import {Response} from './model/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  resp: Response;
  chartData: any = {};
  private responseLoaded: boolean;

  onCompleteItem($event) {
    this.resp = $event.response;
    this.responseLoaded=true;
    /*let x;
    let y;
    let label;
    this.chartData = [['', 0, 0]];
    this.chartData.pop();
    for (const record of this.resp.isomap) {
      x = record.position[0];
      y = record.position[1];
      label = record.file_name;
      this.chartData.push([
        label,
        x,
        y,
      ]);
    }*/
  }

}
