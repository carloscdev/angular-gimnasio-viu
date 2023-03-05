export interface UsuarioInterface {
  dni: string;
  nombre: string;
  apellido_materno: string;
  apellido_paterno: string;
  email: string;
  direccion: string;
  telefono: string;
  telefono_emergencia: string | null;
  genero: 'M' | 'F';
  role: 'ADMINISTRADOR' | 'CLIENTE' | 'INSTRUCTOR' | 'MEDICO';
  factor: string;
}


export interface InstructorInterface extends UsuarioInterface {
  cargo: string;
}

export interface ClienteInterface extends UsuarioInterface {
  preferencias: string;
  membresia_status: 'ACTIVO' | 'INACTIVO';
  membresia_tipo: string;
}

export interface MedicoInterface extends UsuarioInterface {
  especialidad: string;
}

export interface AdminInterface extends UsuarioInterface {
  profesion: string;
}
