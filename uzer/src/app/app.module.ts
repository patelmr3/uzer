import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PushDownBtnDirective } from './directives/push-down-btn.directive';
import { PageTitleComponent } from './page-title/page-title.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UsersComponent } from './users/users.component';

import { InitialsPipe } from './users/initials.pipe';

import { UsersService } from './users/users.service';
import { AppEventsService } from './services/app-events-service/app-events.service';
import { UserSingleComponent } from './user-single/user-single.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SkillsComponent } from './skills/skills.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { BackdropDirective } from './backdrop.directive';

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
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:userId',
    component: UserSingleComponent
  }
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
    UserSingleComponent,
    SpinnerComponent,
    SkillsComponent,
    BackdropComponent,
    BackdropDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService, AppEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
