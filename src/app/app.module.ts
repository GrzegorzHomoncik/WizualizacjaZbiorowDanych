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
import {ChartComponent} from './chart/chart.component';
import {GoogleChartsModule} from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    NavBarComponent,
    ChartComponent
  ],
  imports: [
    GoogleChartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [FileUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
