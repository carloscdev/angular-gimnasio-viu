import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Layouts
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

// Pages
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { UsersComponent } from './pages/dashboard/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
