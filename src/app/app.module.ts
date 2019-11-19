import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader.component';
import { FileUploaderService } from './file-uploader.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChartComponent } from './chart/chart.component';
@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    NavBarComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [FileUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
