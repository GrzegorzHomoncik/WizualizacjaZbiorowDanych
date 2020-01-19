import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TwoDimChartComponent} from './two-dim-chart.component';

describe('ChartComponent', () => {
  let component: TwoDimChartComponent;
  let fixture: ComponentFixture<TwoDimChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwoDimChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDimChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
