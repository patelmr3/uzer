import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PushDownBtnDirective } from './directives/push-down-btn.directive';
import { PageTitleComponent } from './page-title/page-title.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    data: {
      pageTitle: 'Home'
    }
  },
  {
    path: 'register',
    component: RegistrationFormComponent,
    data: {
      pageTitle: 'Register'
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PushDownBtnDirective,
    PageTitleComponent,
    MainContentComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
