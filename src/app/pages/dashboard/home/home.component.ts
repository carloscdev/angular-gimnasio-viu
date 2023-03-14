import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { ClaseInterface } from 'src/app/interfaces/class.interface';
import { ConsultaInterface } from 'src/app/interfaces/consulta.interface';

import { ClassesService }  from 'src/app/services/classes.service';
import { ConsultasService }  from 'src/app/services/consultas.service';
import { NotificationsService }  from 'src/app/services/notifications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Icons
  faRightFromBracket = faRightFromBracket;

  showVideo = false;

  notifications: string[] = [];

  classes: ClaseInterface[] = [];

  consultas: ConsultaInterface[] = [];

  constructor(
    private router: Router,
    private classesService: ClassesService,
    private consultasService: ConsultasService,
    private notificationsService: NotificationsService,
  ) {}

  ngOnInit() {
    this.classesService.classes
      .subscribe(classes => this.classes = classes.slice(0, 3));
    this.consultasService.consultas
      .subscribe(consultas => this.consultas = consultas.slice(0, 3));
    this.notificationsService.notifications
      .subscribe(notifications => this.notifications = notifications.slice(0, 3));
  }

  onLogout() {
    console.log('Logout');
    this.router.navigate(['/auth/login']);
  }

  onToggleVideo() {
    this.showVideo = !this.showVideo;
  }
}
