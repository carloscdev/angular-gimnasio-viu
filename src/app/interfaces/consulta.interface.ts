export interface ConsultaInterface {
  id: string;
  tipo: string;
  status: 'AGENDADA' | 'CERRADA' | 'CANCELADA',
  medico: string,
  fecha: string;
  hora: string;
}
