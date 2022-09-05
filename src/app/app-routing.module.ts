import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login-component/login-component";
import {SummaryComponent} from "./components";

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'summary',
    component:SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
