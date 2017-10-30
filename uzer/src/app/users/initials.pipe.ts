import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initials' })
export class InitialsPipe implements PipeTransform {
  transform(user) {
    return (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase();
  }
}