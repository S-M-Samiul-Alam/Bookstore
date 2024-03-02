import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PagesComponent } from './pages/pages.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiInterceptor } from 'src/shared/helpers/api.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: "BASE_API_URL", useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
