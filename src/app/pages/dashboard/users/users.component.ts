import { Component } from '@angular/core';
import { ClienteInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user: ClienteInterface | null = null;

  users: ClienteInterface[] = [
    {
      dni: '787721231',
      nombre: 'Carlos',
      apellido_materno: 'Cordova',
      apellido_paterno: 'Flores',
      email: 'carlos@mail.com',
      direccion: 'Av. Real 123',
      telefono: '987665',
      telefono_emergencia: null,
      genero: 'M',
      role: 'CLIENTE',
      preferencias: 'Ganar masa muscular',
      membresia_status: 'ACTIVO',
      membresia_tipo: 'Membresia Black',
      factor: 'O+'
    },
    {
      dni: '12345678',
      nombre: 'Pedro',
      apellido_materno: 'Cordova',
      apellido_paterno: 'Flores',
      email: 'carlos@mail.com',
      direccion: 'Av. Real 123',
      telefono: '987665',
      telefono_emergencia: null,
      genero: 'M',
      role: 'CLIENTE',
      preferencias: 'Ganar masa muscular',
      membresia_status: 'ACTIVO',
      membresia_tipo: 'Membresia Black',
      factor: 'O+'
    },
    {
      dni: '32115323',
      nombre: 'Juan',
      apellido_materno: 'Cordova',
      apellido_paterno: 'Flores',
      email: 'carlos@mail.com',
      direccion: 'Av. Real 123',
      telefono: '987665',
      telefono_emergencia: null,
      genero: 'M',
      role: 'CLIENTE',
      preferencias: 'Ganar masa muscular',
      membresia_status: 'INACTIVO',
      membresia_tipo: 'Membresia Black',
      factor: 'O+'
    },
    {
      dni: '432643623',
      nombre: 'Rocio',
      apellido_materno: 'Cordova',
      apellido_paterno: 'Flores',
      email: 'carlos@mail.com',
      direccion: 'Av. Real 123',
      telefono: '987665',
      telefono_emergencia: null,
      genero: 'M',
      role: 'CLIENTE',
      preferencias: 'Ganar masa muscular',
      membresia_status: 'INACTIVO',
      membresia_tipo: 'Membresia Black',
      factor: 'O+'
    }
  ];

  ngOnInit(): void {
    this.user = this.users[0];
  }

  setUser(user: ClienteInterface) {
    this.user = user;
  }
}
