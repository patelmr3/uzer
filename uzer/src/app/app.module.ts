import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PushDownBtnDirective } from './directives/push-down-btn.directive';
import { PageTitleComponent } from './page-title/page-title.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsersComponent } from './users/users.component';

import { InitialsPipe } from './users/initials.pipe';

import { UsersService } from './users/users.service';
import { UserSingleComponent } from './user-single/user-single.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },    
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegistrationFormComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':userId',
        component: UserSingleComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PushDownBtnDirective,
    PageTitleComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    UsersComponent,
    InitialsPipe,
    UserSingleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
