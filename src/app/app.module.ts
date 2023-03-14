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
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RegisterComponent } from './pages/dashboard/register/register.component';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import { ConsultasComponent } from './pages/dashboard/consultas/consultas.component';
import { ConsultaCardComponent } from './components/consulta-card/consulta-card.component';
import { ClassesComponent } from './pages/dashboard/classes/classes.component';
import { ClassCardComponent } from './components/class-card/class-card.component';
import { NotificationsComponent } from './pages/dashboard/notifications/notifications.component';
import { NotificationCardComponent } from './components/notification-card/notification-card.component';
import { ErrorComponent } from './pages/dashboard/error/error.component';

// Custom Pipes
import { NotificationsPipe } from './pipes/notifications.pipe';

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
    PaperBaseComponent,
    ProgressBarComponent,
    UserCardComponent,
    RegisterComponent,
    ModalVideoComponent,
    ConsultasComponent,
    ConsultaCardComponent,
    ClassesComponent,
    ClassCardComponent,
    NotificationsComponent,
    NotificationsPipe,
    NotificationCardComponent,
    ErrorComponent
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
