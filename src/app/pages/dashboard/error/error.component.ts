import { Component } from '@angular/core';
import {
  faFaceFrown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  faFaceFrown = faFaceFrown;
}
