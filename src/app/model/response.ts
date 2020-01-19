import {ChartModel} from './chartModel';

export class Response {
  isomap: ChartModel[];
  locallyLinearEmbedding: ChartModel[];
  MDS: ChartModel[];
  TSNE: ChartModel[];
  spectralEmbedding: ChartModel[];
}
