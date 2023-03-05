import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ClienteInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: ClienteInterface | null = null;
  @Output() setUser = new EventEmitter<ClienteInterface>();

  sendUser() {
    if (this.user) {
      this.setUser.emit(this.user);
    }
  }
}
