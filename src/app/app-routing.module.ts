import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EditComponent} from "./edit/edit.component";
import {TalentsComponent} from "./talents/talents.component";
import {IndustriesComponent} from "./industries/industries.component";
import {ImpresariosComponent} from "./impresarios/impresarios.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'talents', pathMatch: 'full'},
      {path: 'industries', component: IndustriesComponent},
      {path: 'impresarios', component: ImpresariosComponent},
      {path: 'talents', component: TalentsComponent},
      {path: 'edit/:type/:id', component: EditComponent}
    ]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
