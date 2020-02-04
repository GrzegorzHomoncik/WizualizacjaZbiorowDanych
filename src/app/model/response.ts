import {ChartPoint} from './chartPoint';

export class Response {
  isomap: ChartPoint[];
  locallyLinearEmbedding: ChartPoint[];
  MDS: ChartPoint[];
  TSNE: ChartPoint[];
  spectralEmbedding: ChartPoint[];
}
