import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './/app-routing.module';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {EditComponent} from './edit/edit.component';
import {TalentsComponent} from './talents/talents.component';
import {IndustriesComponent} from './industries/industries.component';
import {ImpresariosComponent} from './impresarios/impresarios.component';
import {NewComponent} from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    DashboardComponent,
    EditComponent,
    TalentsComponent,
    IndustriesComponent,
    ImpresariosComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
