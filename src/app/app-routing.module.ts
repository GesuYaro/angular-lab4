import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from 'src/app/login-page/login-page.component'
import { MainPageComponent } from 'src/app/main-page/main-page.component'

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'main', component: MainPageComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
