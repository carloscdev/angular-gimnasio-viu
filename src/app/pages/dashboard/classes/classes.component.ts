import { Component } from '@angular/core';
import { ClaseInterface } from 'src/app/interfaces/class.interface';
import {  Router, ActivatedRoute } from '@angular/router';

import { ClassesService }  from 'src/app/services/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  currentClass: ClaseInterface | null = null;
  classes: ClaseInterface[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private classesService: ClassesService
  ) { }


  ngOnInit() {
    this.classesService.classes
      .subscribe(classes => this.classes = classes);
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
