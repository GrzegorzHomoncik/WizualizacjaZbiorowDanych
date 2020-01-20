import {Component} from '@angular/core';
import {Response} from './model/response';
import {ChartModel} from './model/chartModel';
import {Model} from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  resp: Response;
  private responseLoaded: boolean;
  private nrOfDimensions: number;

  onCompleteItem($event) {
    this.nrOfDimensions = $event.nrOfDimensions;
    this.resp = this.mapIntoChartModel($event.response);
    this.responseLoaded = true;
  }

  private mapIntoChartModel(response: any) {
    const mapped: Response = new Response();
    mapped.isomap = this.mapData(response.isomap);
    mapped.locallyLinearEmbedding = this.mapData(response.locallyLinearEmbedding);
    mapped.MDS = this.mapData(response.MDS);
    mapped.TSNE = this.mapData(response.TSNE);
    mapped.spectralEmbedding = this.mapData(response.spectralEmbedding);
    return mapped;
  }

  private mapModelToChartModel(model: Model) {
    function mapColor(num: number) {
      switch (num) {
        case 0:
          return 'red';
        case 1:
          return 'green';
        case 2:
          return 'blue';
        case 3:
          return 'orange';
        case 4:
          return 'magenta';
      }
    }

    const chartModel: ChartModel = {
      x: model.position[0],
      y: model.position[1],
      z: model.position[2],
      label: model.file_name,
      color: mapColor(model.color)
    };
    return chartModel;
  }

  private mapData(arr: Model[]) {
    const newArr = [];
    for (const element of arr) {
      newArr.push(this.mapModelToChartModel(element));
    }
    return newArr;
  }
}
