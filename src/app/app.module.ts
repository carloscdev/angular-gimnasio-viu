import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { MainTitleComponent } from './components/base/main-title/main-title.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UsersComponent } from './pages/dashboard/users/users.component';
import { SubTitleComponent } from './components/base/sub-title/sub-title.component';
import { PaperBaseComponent } from './components/base/paper-base/paper-base.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    MainTitleComponent,
    HomeComponent,
    DashboardLayoutComponent,
    SideBarComponent,
    UsersComponent,
    SubTitleComponent,
    PaperBaseComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
