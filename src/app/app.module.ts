import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FileUploaderComponent} from './file-uploader.component';
import {FileUploaderService} from './file-uploader.service';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {TwoDimChartComponent} from './chart/two-dim-chart.component';
import {GoogleChartsModule} from 'angular-google-charts';
import {HighchartComponent} from './three-dim-chart/highchart/highchart.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {ThreeDimChartComponent} from './three-dim-chart/three-dim-chart.component';
import {HighchartTwoDimComponent} from './chart/highchart-two-dim/highchart-two-dim.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    NavBarComponent,
    TwoDimChartComponent,
    HighchartComponent,
    ThreeDimChartComponent,
    HighchartTwoDimComponent
  ],
  imports: [
    GoogleChartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [
    FileUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
