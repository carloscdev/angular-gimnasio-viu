import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notifications'
})
export class NotificationsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const today = new Date();
    const formatDate = today.toLocaleDateString();
    return `Recordatorio: ${value}  [${formatDate}]`;
  }

}
