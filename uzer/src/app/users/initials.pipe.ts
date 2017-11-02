import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(user) {
    if(user.firstName)
      return (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase();
    else
      return '';
  }
}