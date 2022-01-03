import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './login-page/header/header.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, MatTabsModule ],
  declarations: [ AppComponent, HeaderComponent, LoginFormComponent, LoginPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
