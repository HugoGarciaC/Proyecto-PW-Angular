import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  layout1: string = 'NACIÓN DEPORTES';
  layout2: string = 'SEDES';
  layout3: string = 'NUESTRAS REDES';
  layout4: string = 'MÁS INFORMACIÓN';

  text: string = 'Copyright @2022 todos los derechos reservados por:';

  city1: string = 'Medellín';
  city2: string = 'Bogota';

  red1: string = 'Linkedln';
  red2: string = 'Twitter';

  info1: string = 'naciondeportes@gmail.com';
  info2: string = 'L-V 7A.M - 5P.M';
}
