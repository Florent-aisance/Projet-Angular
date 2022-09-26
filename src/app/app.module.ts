import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppState } from 'src/store/app.state';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from '../primeng-module';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainer } from './main/main.container';
import { MainUi } from './main/main.ui';

@NgModule({
  declarations: [
    AppComponent,
    MainContainer,
    MainUi,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    ChartModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
