import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConsultaInterface } from 'src/app/interfaces/consulta.interface';

@Component({
  selector: 'app-consulta-card',
  templateUrl: './consulta-card.component.html',
  styleUrls: ['./consulta-card.component.css']
})
export class ConsultaCardComponent {
  @Input() consulta: ConsultaInterface | null = null;
  @Output() setConsulta = new EventEmitter<ConsultaInterface>();

  sendConsulta() {
    if (this.consulta) {
      this.setConsulta.emit(this.consulta);
    }
  }
}
