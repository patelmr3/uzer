import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PushDownBtnDirective } from './directives/push-down-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PushDownBtnDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
