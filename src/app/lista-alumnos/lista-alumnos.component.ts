import { Component } from '@angular/core';
import baseAlumnos from '../../assets/base-alumnos/alumnos.json';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos: any[] = baseAlumnos.students;

  aprobado = '../../assets/images/comprobar.png';
  reprobado = '../../assets/images/cancelar.png';
  constructor() {
    console.log(this.alumnos);
  }
}
