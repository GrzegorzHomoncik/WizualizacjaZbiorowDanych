import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThreeDimChartComponent} from './three-dim-chart.component';

describe('ThreeDimChartComponent', () => {
  let component: ThreeDimChartComponent;
  let fixture: ComponentFixture<ThreeDimChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeDimChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
