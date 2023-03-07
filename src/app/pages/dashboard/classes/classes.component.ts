import { Component } from '@angular/core';
import { ClaseInterface } from 'src/app/interfaces/class.interface';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  currentClass: ClaseInterface | null = null;
  classes: ClaseInterface[] = [
    {
      id: 'cla0001',
      tipo_clase: 'Yoga',
      observaciones: 'Traer tapete para la clase',
      aforo: 20,
      status: 'ABIERTA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 12,
    },
    {
      id: 'cla0002',
      tipo_clase: 'Salsa',
      observaciones: 'Traer tapete para la clase',
      aforo: 50,
      status: 'ABIERTA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 48,
    },
    {
      id: 'cla0003',
      tipo_clase: 'Fight Do',
      observaciones: 'Traer tapete para la clase',
      aforo: 45,
      status: 'ABIERTA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 95,
    },
    {
      id: 'cla0004',
      tipo_clase: 'Fight Do',
      observaciones: 'Traer tapete para la clase',
      aforo: 45,
      status: 'CERRADA',
      fecha: '06/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 95,
    },
    {
      id: 'cla0005',
      tipo_clase: 'Fight Do',
      observaciones: 'Traer tapete para la clase',
      aforo: 45,
      status: 'CERRADA',
      fecha: '12/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 100,
    },
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe((params) => {
        const currentClass = this.classes.find((item) => item.id === params.get('class'));
        if (currentClass) {
          this.currentClass = currentClass;
        }
      });
  };

  setClass(currentClass: ClaseInterface) {
    this.router.navigate(['/dashboard/classes'], { queryParams: { class: currentClass.id } });
    this.currentClass = currentClass;
  };

}
