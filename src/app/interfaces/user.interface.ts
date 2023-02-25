export interface UsuarioInterface {
  dni: string;
  nombre: string;
  apellido_materno: string;
  apellido_paterno: string;
  email: string;
  direccion: string;
  telefono: string;
  telefono_emergencia: string;
  genero: 'M' | 'F';
  role: 'ADMINISTRADOR' | 'CLIENTE' | 'INSTRUCTOR' | 'MEDICO';
}


export interface InstructorInterface extends UsuarioInterface {
  cargo: string;
}

export interface ClienteInterface extends UsuarioInterface {
  preferencias: string;
}

export interface MedicoInterface extends UsuarioInterface {
  especialidad: string;
}

export interface AdminInterface extends UsuarioInterface {
  profesion: string;
}
