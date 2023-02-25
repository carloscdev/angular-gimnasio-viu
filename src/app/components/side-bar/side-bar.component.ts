import { Component } from '@angular/core';
import { faHome, faUsers, faDumbbell, faSuitcaseMedical, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface UserMenu {
  title: string;
  path: string;
  icon: IconDefinition
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  userMenu: UserMenu[] = [
    { title: 'Inicio', path: '/dashboard/home', icon: faHome },
    { title: 'Usuarios', path: '/dashboard/users', icon: faUsers },
    { title: 'Próximas Clases', path: '/auth/login', icon: faDumbbell },
    { title: 'Próximas Consultas', path: '/login', icon: faSuitcaseMedical },
  ]
}
