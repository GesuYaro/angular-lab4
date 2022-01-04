import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './login-page/header/header.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResultsTableComponent } from './main-page/results-table/results-table.component';
import { GraphComponent } from './main-page/graph/graph.component';
import { CoordinatesFormComponent } from './main-page/coordinates-form/coordinates-form.component';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, MatTabsModule ],
  declarations: [ AppComponent, HeaderComponent, LoginFormComponent, LoginPageComponent, MainPageComponent, ResultsTableComponent, GraphComponent, CoordinatesFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
