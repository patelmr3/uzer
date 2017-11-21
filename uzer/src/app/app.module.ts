import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, /*NO_ERRORS_SCHEMA*/ } from '@angular/core';
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
import { SkillsService } from './services/skills-service/skills.service';
import { UserSingleComponent } from './user-single/user-single.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SkillsComponent } from './skills/skills.component';
import { AddSkillComponent } from './skills/add-skill/add-skill.component';
import { UpdateSkillComponent } from './skills/update-skill/update-skill.component';
import { ModalComponent } from './modal/modal.component';
import { ExpertiseLevelIndicatorComponent } from './skills/expertise-level-indicator/expertise-level-indicator.component';
import { ExpertiseLevelComponent } from './skills/expertise-level/expertise-level.component';

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
    AddSkillComponent,
    UpdateSkillComponent,
    ModalComponent,
    ExpertiseLevelIndicatorComponent,
    ExpertiseLevelComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService, SkillsService],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
