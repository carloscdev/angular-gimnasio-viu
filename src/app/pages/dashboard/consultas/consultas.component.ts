import { Component } from '@angular/core';
import { ConsultaInterface } from 'src/app/interfaces/consulta.interface';
import {  Router, ActivatedRoute } from '@angular/router';

import { ConsultasService }  from 'src/app/services/consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  consulta: ConsultaInterface | null = null;

  consultas: ConsultaInterface[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private consultasService: ConsultasService,
  ) { }

  ngOnInit() {
    this.consultasService.consultas
      .subscribe(consultas => this.consultas = consultas);
    this.activatedRoute.queryParamMap
      .subscribe((params) => {
        const currentConsulta = this.consultas.find((consulta) => consulta.id === params.get('consulta'));
        if (currentConsulta) {
          this.consulta = currentConsulta;
        }
      })
  };

  setConsulta(consulta: ConsultaInterface) {
    this.router.navigate(['/dashboard/consultas'], { queryParams: { consulta: consulta.id } })
    this.consulta = consulta;
  };
}
