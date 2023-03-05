export interface ClaseInterface {
  id: string;
  tipo_clase: string;
  observaciones: string;
  aforo: number;
  status: 'ABIERTA' | 'CERRADA' | 'CANCELADA';
  fecha: string;
  hora: string;
  inscritos: number;
  instructor: string;
}
