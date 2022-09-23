import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import * as _components from './components';
import * as _layouts from './components/layout';
import { TopMenuComponent } from './components/layout/top-menu-component/top-menu-component';
import { FormsModule } from '@angular/forms';

const states = [];
const layouts = [_layouts.HeaderComponent, _layouts.LeftMenuComponent, _layouts.MainLayoutComponent];
const components = [
  AppComponent,
  _components.LoginComponent,
  _components.SummaryComponent,
  _components.LoaderAnimationComponent,
];

@NgModule({
  declarations: [...components, ...layouts, TopMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(states),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
